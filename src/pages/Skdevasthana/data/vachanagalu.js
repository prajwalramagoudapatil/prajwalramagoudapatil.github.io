import vachanaMarkdown from "../assets/vachanagalu.md?raw";

const headingPattern = /^#{3,4}\s*(\d+)\.\s*(IMP)?\s*$/i;
const tagsPattern = /^\**tags:\s*(.*?)\**$/i;

const normalizeText = (value) => value.replace(/^\uFEFF/, "").trim();

const buildEntry = (entry, index) => ({
  id: `vachana-${String(index + 1).padStart(2, "0")}`,
  number: entry.number,
  showOnMainPage: entry.showOnMainPage,
  tags: entry.tags,
  text: entry.lines.join("\n"),
});

const parseVachanagalu = (markdown) => {
  const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
  const entries = [];
  let currentEntry = null;

  lines.forEach((rawLine) => {
    const line = rawLine.trimEnd();
    const headingMatch = line.match(headingPattern);

    if (headingMatch) {
      if (currentEntry?.lines.length) {
        entries.push(currentEntry);
      }

      currentEntry = {
        number: Number(headingMatch[1]),
        showOnMainPage: Boolean(headingMatch[2]),
        tags: [],
        lines: [],
      };
      return;
    }

    if (!currentEntry) {
      return;
    }

    const normalizedLine = line.trim();

    if (!normalizedLine) {
      return;
    }

    const tagsMatch = normalizedLine.match(tagsPattern);

    if (tagsMatch) {
      currentEntry.tags = tagsMatch[1]
        .split(",")
        .map((tag) => normalizeText(tag.replace(/\*/g, "")))
        .filter(Boolean);
      return;
    }

    currentEntry.lines.push(normalizedLine.replace(/\*\*/g, ""));
  });

  if (currentEntry?.lines.length) {
    entries.push(currentEntry);
  }

  return entries.map(buildEntry);
};

const vachanagalu = parseVachanagalu(vachanaMarkdown);

export const featuredVachanagalu = vachanagalu.filter(
  (vachana) => vachana.showOnMainPage
);

export default vachanagalu;
