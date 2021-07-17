import { Cleaner } from "./Cleaner";
import { textLengthClassifier } from "./utils/textLengthClassifier";
import { readDocuments } from "./utils/readData";
import { writeResults } from "./utils/writeData";

// read arabic text
const document: string[] = readDocuments(["data", "textLengthList", "tl4.txt"]);
// console.log(document.length);

// clean up textual data
const cleaner = new Cleaner();
const cleanedDocument = cleaner.fullCleanUp(document);
console.log(cleanedDocument.length);
