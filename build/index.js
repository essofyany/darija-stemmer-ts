"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cleaner_1 = require("./Cleaner");
var readData_1 = require("./utils/readData");
// read arabic text
var document = readData_1.readDocuments(["data", "textLengthList", "tl4.txt"]);
// console.log(document.length);
// clean up textual data
var cleaner = new Cleaner_1.Cleaner();
var cleanedDocument = cleaner.fullCleanUp(document);
console.log(cleanedDocument.length);
