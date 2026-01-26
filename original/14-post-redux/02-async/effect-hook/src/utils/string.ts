export const capitalize = (text: string): string =>
  text
    .trim()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
