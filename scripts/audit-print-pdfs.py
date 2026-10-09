import json
from pathlib import Path

import pdfplumber

root = Path('.test-artifacts/audit')
reports = []
files = sorted(root.glob('print-*.pdf'))
assert len(files) == 6, f'Expected six material PDFs, found {len(files)}'
meeting = root / 'meeting-plan.pdf'
if meeting.exists():
    files.append(meeting)
for file in files:
    with pdfplumber.open(file) as pdf:
        pages = []
        for index, page in enumerate(pdf.pages, 1):
            text = page.extract_text() or ''
            assert text.strip(), f'Empty page: {file.name}, {index}'
            outside = [char for char in page.chars if char['x0'] < -1
                       or char['x1'] > page.width + 1 or char['top'] < -1
                       or char['bottom'] > page.height + 1]
            assert not outside, f'Text outside paper: {file.name}, {index}'
            image = root / f'{file.stem}-page-{index}.png'
            page.to_image(resolution=96).save(image)
            pages.append({'page': index, 'characters': len(text), 'image': str(image)})
        all_text = '\n'.join(page.extract_text() or '' for page in pdf.pages)
        if file == meeting:
            for heading in ['Aprender em 60 minutos', 'Roteiro passo a passo',
                            'Acolhimento e combinados', 'Leitura bíblica',
                            'Conversa e aplicação', 'Oração e encerramento']:
                assert heading in all_text, f'Missing plan heading: {heading}'
        else:
            assert 'bibliaclube.com.br' in all_text
        assert 'Preferências de cookies' not in all_text
        reports.append({'file': str(file), 'pageCount': len(pdf.pages), 'pages': pages})
(root / 'print-validation-2026-10-09.json').write_text(json.dumps(reports, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(reports, ensure_ascii=False, indent=2))
