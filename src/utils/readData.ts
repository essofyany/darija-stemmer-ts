import * as fs from "fs";
import * as path from "path";

export function readDocuments(filePath: string[]): string[] {
  const documentsDataPath = path.join(process.cwd(), ...filePath);
  let result = fs
    .readFileSync(documentsDataPath, {
      encoding: "utf-8",
    })
    .trim()
    .split(" ");

  return result;
}
