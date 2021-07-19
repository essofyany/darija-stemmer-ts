import { Cleaner } from "./Cleaner";
import { PrefixeCollector } from "./PrefixeCollector";
import { runTest } from "./runTest";
import { SuffixeCollector } from "./SuffixeCollector";
import { TextClassifier } from "./TextClassifier";
// import { textLengthClassifier } from "./utils/textLengthClassifier";
import { readDocuments } from "./utils/readData";

// read arabic text
const document: string[] = readDocuments(["data", "arabic.txt"]);
// console.log(document.length);

// clean up textual data
const cleaner = new Cleaner();
const cleanedDocument = cleaner.fullCleanUp(document);
// console.log(cleanedDocument.length);

// ############## Text classifier ############
const textClassifier = new TextClassifier(cleanedDocument);
// textClassifier.textClassifier() // this classify the document based on word length

// ############## collect prefixes ############
const prefixeCollector = new PrefixeCollector();
prefixeCollector.prefixesExtractor([
  "data/textClasses/with4chars.txt",
  "data/textClasses/with5chars.txt",
  "data/textClasses/with6chars.txt",
  "data/textClasses/with7chars.txt",
  "data/textClasses/with8chars.txt",
  "data/textClasses/with9chars.txt",
  "data/textClasses/with10OrMoreChars.txt",
]);

// ############## collect suffixes ###########
const suffixeCollector = new SuffixeCollector();

suffixeCollector.suffixesExtractor([
  "data/textClasses/with4chars.txt",
  "data/textClasses/with5chars.txt",
  "data/textClasses/with6chars.txt",
  "data/textClasses/with7chars.txt",
  "data/textClasses/with8chars.txt",
  "data/textClasses/with9chars.txt",
  "data/textClasses/with10OrMoreChars.txt",
]);

// const text = "الكلام الزين كيمشي في الدهازات وكيقرب المسافات";
// // const text = "صديقي توحشناك خويا واش نتا لباس الدبان لبوه الكلب ها واحد السلام";

// const preffixes = ["ال", "وكي", "ك", "كت", "لل", "كي", "كن"];

// runTest(text, preffixes)
