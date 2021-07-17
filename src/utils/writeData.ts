import fs from "fs";
import path from "path";

export function writeResults(
  filePath: string[],
  data: string[],
  gap: string = " "
): void {
  const documentsDataPath = path.join(process.cwd(), ...filePath);
  const results = data.join(gap);
  // const results = data.join("\n");
  fs.writeFileSync(documentsDataPath, results);
}
