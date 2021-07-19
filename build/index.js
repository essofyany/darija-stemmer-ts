"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cleaner_1 = require("./Cleaner");
var PrefixeCollector_1 = require("./PrefixeCollector");
var SuffixeCollector_1 = require("./SuffixeCollector");
// import { textLengthClassifier } from "./utils/textLengthClassifier";
var readData_1 = require("./utils/readData");
// read arabic text
var document = readData_1.readDocuments(["data", "arabic.txt"]);
// console.log(document.length);
// clean up textual data
var cleaner = new Cleaner_1.Cleaner();
var cleanedDocument = cleaner.fullCleanUp(document);
// console.log(cleanedDocument.length);
// ############## collect prefixes ############
var prefixeCollector = new PrefixeCollector_1.PrefixeCollector(cleanedDocument);
// prefixeCollector.textClassifier(); // this is a private method
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
var suffixeCollector = new SuffixeCollector_1.SuffixeCollector();
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
