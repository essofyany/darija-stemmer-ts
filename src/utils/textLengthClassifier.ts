import { writeResults } from "./writeData";

export function textLengthClassifier(document: string[]): void {
  const documentText: string[] = document.map((word) => word.trim());

  // create list of words wit length = 3
  const textwith3Chars: string[] = [];
  documentText
    .filter((word) => word && word.length === 3)
    .map((word) => {
      if (!textwith3Chars.includes(word))
        return textwith3Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl3.txt"], textwith3Chars);

  // create list of words wit length = 4
  const textwith4Chars: string[] = [];
  documentText
    .filter((word) => word && word.length === 4)
    .map((word) => {
      if (!textwith4Chars.includes(word))
        return textwith4Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl4.txt"], textwith4Chars);

  // create list of words wit length = 5
  const textwith5Chars: string[] = [];

  documentText
    .filter((word) => word.length === 5)
    .map((word) => {
      if (!textwith5Chars.includes(word))
        return textwith5Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl5.txt"], textwith5Chars);

  // create list of words wit length = 6
  const textwith6Chars: string[] = [];
  documentText
    .filter((word) => word.length === 6)
    .map((word) => {
      if (!textwith6Chars.includes(word))
        return textwith6Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl6.txt"], textwith6Chars);

  // create list of words wit length = 7
  const textwith7Chars: string[] = [];
  documentText
    .filter((word) => word.length === 7)
    .map((word) => {
      if (!textwith7Chars.includes(word))
        return textwith7Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl7.txt"], textwith7Chars);

  // create list of words wit length = 8
  const textwith8Chars: string[] = [];
  documentText
    .filter((word) => word.length === 8)
    .map((word) => {
      if (!textwith8Chars.includes(word))
        return textwith8Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl8.txt"], textwith8Chars);

  // create list of words wit length = 9
  const textwith9Chars: string[] = [];
  documentText
    .filter((word) => word.length === 9)
    .map((word) => {
      if (!textwith9Chars.includes(word))
        return textwith8Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl9.txt"], textwith9Chars);

  // create list of words wit length = 10
  const textwith10Chars: string[] = [];
  documentText
    .filter((word) => word.length === 10)
    .map((word) => {
      if (!textwith10Chars.includes(word))
        return textwith8Chars.push(word.trim());
    });
  writeResults(["data", "textLengthList", "tl10.txt"], textwith10Chars);
}
