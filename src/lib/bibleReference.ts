import bibleDataJson from "@/data/almeidaLivre.json";

type BibleVerse = {
  number: number;
  text: string;
};

type BibleChapter = {
  chapter: number;
  verses: BibleVerse[];
};

type BibleBook = {
  book: string;
  chapters: BibleChapter[];
};

type BibleData = {
  books: BibleBook[];
};

export type ResolvedVerse = BibleVerse & {
  chapter: number;
};

export type ResolvedPassageSection = {
  reference: string;
  verses: ResolvedVerse[];
};

export type ResolvedBibleReference = {
  reference: string;
  version: string;
  sections: ResolvedPassageSection[];
  notice?: string;
};

type BookDefinition = {
  osis: string;
  name: string;
  aliases: string[];
};

const bibleData = bibleDataJson as BibleData;
const MAX_CHAPTER_RANGE = 3;
const MAX_VERSES = 80;
const PREVIEW_VERSES = 30;

const bookDefinitions: BookDefinition[] = [
  { osis: "Gen", name: "Gênesis", aliases: ["gênesis", "genesis"] },
  { osis: "Exod", name: "Êxodo", aliases: ["êxodo", "exodo"] },
  { osis: "Lev", name: "Levítico", aliases: ["levítico", "levitico"] },
  { osis: "Num", name: "Números", aliases: ["números", "numeros"] },
  { osis: "Deut", name: "Deuteronômio", aliases: ["deuteronômio", "deuteronomio"] },
  { osis: "Josh", name: "Josué", aliases: ["josué", "josue"] },
  { osis: "Judg", name: "Juízes", aliases: ["juízes", "juizes"] },
  { osis: "Ruth", name: "Rute", aliases: ["rute"] },
  { osis: "1Sam", name: "1 Samuel", aliases: ["1 samuel"] },
  { osis: "2Sam", name: "2 Samuel", aliases: ["2 samuel"] },
  { osis: "1Kgs", name: "1 Reis", aliases: ["1 reis"] },
  { osis: "2Kgs", name: "2 Reis", aliases: ["2 reis"] },
  { osis: "1Chr", name: "1 Crônicas", aliases: ["1 crônicas", "1 cronicas"] },
  { osis: "2Chr", name: "2 Crônicas", aliases: ["2 crônicas", "2 cronicas"] },
  { osis: "Ezra", name: "Esdras", aliases: ["esdras"] },
  { osis: "Neh", name: "Neemias", aliases: ["neemias"] },
  { osis: "Esth", name: "Ester", aliases: ["ester"] },
  { osis: "Job", name: "Jó", aliases: ["jó", "jo"] },
  { osis: "Ps", name: "Salmos", aliases: ["salmos", "salmo"] },
  { osis: "Prov", name: "Provérbios", aliases: ["provérbios", "proverbios"] },
  { osis: "Eccl", name: "Eclesiastes", aliases: ["eclesiastes"] },
  { osis: "Song", name: "Cânticos", aliases: ["cântico dos cânticos", "cantico dos canticos", "cânticos", "canticos", "cantares"] },
  { osis: "Isa", name: "Isaías", aliases: ["isaías", "isaias"] },
  { osis: "Jer", name: "Jeremias", aliases: ["jeremias"] },
  { osis: "Lam", name: "Lamentações", aliases: ["lamentações", "lamentacoes"] },
  { osis: "Ezek", name: "Ezequiel", aliases: ["ezequiel"] },
  { osis: "Dan", name: "Daniel", aliases: ["daniel"] },
  { osis: "Hos", name: "Oséias", aliases: ["oséias", "oseias"] },
  { osis: "Joel", name: "Joel", aliases: ["joel"] },
  { osis: "Amos", name: "Amós", aliases: ["amós", "amos"] },
  { osis: "Obad", name: "Obadias", aliases: ["obadias"] },
  { osis: "Jonah", name: "Jonas", aliases: ["jonas"] },
  { osis: "Mic", name: "Miqueias", aliases: ["miqueias"] },
  { osis: "Nah", name: "Naum", aliases: ["naum"] },
  { osis: "Hab", name: "Habacuque", aliases: ["habacuque"] },
  { osis: "Zeph", name: "Sofonias", aliases: ["sofonias"] },
  { osis: "Hag", name: "Ageu", aliases: ["ageu"] },
  { osis: "Zech", name: "Zacarias", aliases: ["zacarias"] },
  { osis: "Mal", name: "Malaquias", aliases: ["malaquias"] },
  { osis: "Matt", name: "Mateus", aliases: ["mateus"] },
  { osis: "Mark", name: "Marcos", aliases: ["marcos"] },
  { osis: "Luke", name: "Lucas", aliases: ["lucas"] },
  { osis: "John", name: "João", aliases: ["joão", "joao"] },
  { osis: "Acts", name: "Atos", aliases: ["atos"] },
  { osis: "Rom", name: "Romanos", aliases: ["romanos"] },
  { osis: "1Cor", name: "1 Coríntios", aliases: ["1 coríntios", "1 corintios"] },
  { osis: "2Cor", name: "2 Coríntios", aliases: ["2 coríntios", "2 corintios"] },
  { osis: "Gal", name: "Gálatas", aliases: ["gálatas", "galatas"] },
  { osis: "Eph", name: "Efésios", aliases: ["efésios", "efesios"] },
  { osis: "Phil", name: "Filipenses", aliases: ["filipenses"] },
  { osis: "Col", name: "Colossenses", aliases: ["colossenses"] },
  { osis: "1Thess", name: "1 Tessalonicenses", aliases: ["1 tessalonicenses"] },
  { osis: "2Thess", name: "2 Tessalonicenses", aliases: ["2 tessalonicenses"] },
  { osis: "1Tim", name: "1 Timóteo", aliases: ["1 timóteo", "1 timoteo"] },
  { osis: "2Tim", name: "2 Timóteo", aliases: ["2 timóteo", "2 timoteo"] },
  { osis: "Titus", name: "Tito", aliases: ["tito"] },
  { osis: "Phlm", name: "Filemom", aliases: ["filemom"] },
  { osis: "Heb", name: "Hebreus", aliases: ["hebreus"] },
  { osis: "Jas", name: "Tiago", aliases: ["tiago"] },
  { osis: "1Pet", name: "1 Pedro", aliases: ["1 pedro"] },
  { osis: "2Pet", name: "2 Pedro", aliases: ["2 pedro"] },
  { osis: "1John", name: "1 João", aliases: ["1 joão", "1 joao"] },
  { osis: "2John", name: "2 João", aliases: ["2 joão", "2 joao"] },
  { osis: "3John", name: "3 João", aliases: ["3 joão", "3 joao"] },
  { osis: "Jude", name: "Judas", aliases: ["judas"] },
  { osis: "Rev", name: "Apocalipse", aliases: ["apocalipse"] },
];

const normalizedAliases = bookDefinitions
  .flatMap((book) => book.aliases.map((alias) => ({ alias: normalize(alias), book })))
  .sort((a, b) => b.alias.length - a.alias.length);

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function identifyBook(segment: string, inheritedBook?: BookDefinition) {
  const normalizedSegment = normalize(segment);
  const match = normalizedAliases.find(
    ({ alias }) => normalizedSegment === alias || normalizedSegment.startsWith(`${alias} `),
  );

  if (match) {
    return {
      book: match.book,
      remainder: normalizedSegment.slice(match.alias.length).trim(),
    };
  }

  return inheritedBook
    ? { book: inheritedBook, remainder: normalizedSegment }
    : null;
}

function getBook(osis: string) {
  return bibleData.books.find((book) => book.book === osis);
}

function formatSectionReference(
  bookName: string,
  chapter: number,
  chapterEnd?: number,
  verseStart?: number,
  verseEnd?: number,
) {
  if (verseStart !== undefined) {
    return `${bookName} ${chapter}:${verseStart}${verseEnd && verseEnd !== verseStart ? `-${verseEnd}` : ""}`;
  }

  return `${bookName} ${chapter}${chapterEnd && chapterEnd !== chapter ? `-${chapterEnd}` : ""}`;
}

function createChapterPreview(book: BookDefinition, chapterNumber = 1) {
  const bibleBook = getBook(book.osis);
  const chapter = bibleBook?.chapters.find((item) => item.chapter === chapterNumber);

  if (!chapter) return null;

  return {
    reference: `${book.name} ${chapterNumber} (início da leitura)`,
    verses: chapter.verses.slice(0, PREVIEW_VERSES).map((verse) => ({
      ...verse,
      chapter: chapterNumber,
    })),
  } satisfies ResolvedPassageSection;
}

export function resolveBibleReference(reference: string): ResolvedBibleReference {
  const sections: ResolvedPassageSection[] = [];
  const notices: string[] = [];
  const segments = reference.replace(/[–—]/g, "-").split(";").map((item) => item.trim());
  let inheritedBook: BookDefinition | undefined;
  let verseCount = 0;

  for (const segment of segments) {
    if (!segment) continue;

    if (/\sa\s/i.test(segment)) {
      const firstBookName = segment.split(/\sa\s/i)[0];
      const firstBook = identifyBook(firstBookName)?.book;
      const preview = firstBook ? createChapterPreview(firstBook) : null;

      if (preview) {
        sections.push(preview);
        verseCount += preview.verses.length;
      }

      notices.push(`“${segment}” é uma referência panorâmica. Para manter a leitura leve, exibimos apenas o início.`);
      continue;
    }

    const identified = identifyBook(segment, inheritedBook);
    if (!identified) {
      notices.push(`Não foi possível interpretar “${segment}”.`);
      continue;
    }

    inheritedBook = identified.book;
    const bibleBook = getBook(identified.book.osis);

    if (!bibleBook || !identified.remainder) {
      const preview = createChapterPreview(identified.book);

      if (preview) {
        sections.push(preview);
        verseCount += preview.verses.length;
      }

      notices.push(`“${segment}” abrange um livro inteiro. Para manter a leitura leve, exibimos apenas o início.`);
      continue;
    }

    const verseMatch = identified.remainder.match(/^(\d+):(\d+)(?:-(\d+))?$/);
    const chapterMatch = identified.remainder.match(/^(\d+)(?:-(\d+))?$/);

    if (!verseMatch && !chapterMatch) {
      notices.push(`Não foi possível interpretar “${segment}”.`);
      continue;
    }

    const chapterStart = Number((verseMatch ?? chapterMatch)?.[1]);
    const chapterEnd = verseMatch ? chapterStart : Number(chapterMatch?.[2] ?? chapterStart);
    const verseStart = verseMatch ? Number(verseMatch[2]) : undefined;
    const verseEnd = verseMatch ? Number(verseMatch[3] ?? verseStart) : undefined;

    if (chapterEnd - chapterStart + 1 > MAX_CHAPTER_RANGE) {
      const preview = createChapterPreview(identified.book, chapterStart);

      if (preview) {
        sections.push(preview);
        verseCount += preview.verses.length;
      }

      notices.push(`“${segment}” abrange muitos capítulos. Para manter a leitura leve, exibimos apenas o início.`);
      continue;
    }

    const resolvedVerses: ResolvedVerse[] = [];

    for (let chapterNumber = chapterStart; chapterNumber <= chapterEnd; chapterNumber += 1) {
      const chapter = bibleBook.chapters.find((item) => item.chapter === chapterNumber);
      if (!chapter) continue;

      for (const verse of chapter.verses) {
        if (chapterNumber === chapterStart && verseStart !== undefined && verse.number < verseStart) continue;
        if (chapterNumber === chapterStart && verseEnd !== undefined && verse.number > verseEnd) continue;
        if (verseCount >= MAX_VERSES) break;

        resolvedVerses.push({ ...verse, chapter: chapterNumber });
        verseCount += 1;
      }

      if (verseCount >= MAX_VERSES) break;
    }

    if (resolvedVerses.length > 0) {
      sections.push({
        reference: formatSectionReference(
          identified.book.name,
          chapterStart,
          chapterEnd,
          verseStart,
          verseEnd,
        ),
        verses: resolvedVerses,
      });
    } else {
      notices.push(`O texto de “${segment}” não foi encontrado nesta edição.`);
    }

    if (verseCount >= MAX_VERSES) {
      notices.push("A leitura foi limitada aos primeiros 80 versículos para manter a página leve.");
      break;
    }
  }

  return {
    reference,
    version: "Almeida 1819 (Bíblia Livre)",
    sections,
    notice: notices.length > 0 ? notices.join(" ") : undefined,
  };
}
