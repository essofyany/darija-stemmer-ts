"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textLengthClassifier = void 0;
var writeData_1 = require("./writeData");
function textLengthClassifier(document) {
    var documentText = document.map(function (word) { return word.trim(); });
    // create list of words wit length = 3
    var textwith3Chars = [];
    documentText
        .filter(function (word) { return word && word.length === 3; })
        .map(function (word) {
        if (!textwith3Chars.includes(word))
            return textwith3Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl3.txt"], textwith3Chars);
    // create list of words wit length = 4
    var textwith4Chars = [];
    documentText
        .filter(function (word) { return word && word.length === 4; })
        .map(function (word) {
        if (!textwith4Chars.includes(word))
            return textwith4Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl4.txt"], textwith4Chars);
    // create list of words wit length = 5
    var textwith5Chars = [];
    documentText
        .filter(function (word) { return word.length === 5; })
        .map(function (word) {
        if (!textwith5Chars.includes(word))
            return textwith5Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl5.txt"], textwith5Chars);
    // create list of words wit length = 6
    var textwith6Chars = [];
    documentText
        .filter(function (word) { return word.length === 6; })
        .map(function (word) {
        if (!textwith6Chars.includes(word))
            return textwith6Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl6.txt"], textwith6Chars);
    // create list of words wit length = 7
    var textwith7Chars = [];
    documentText
        .filter(function (word) { return word.length === 7; })
        .map(function (word) {
        if (!textwith7Chars.includes(word))
            return textwith7Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl7.txt"], textwith7Chars);
    // create list of words wit length = 8
    var textwith8Chars = [];
    documentText
        .filter(function (word) { return word.length === 8; })
        .map(function (word) {
        if (!textwith8Chars.includes(word))
            return textwith8Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl8.txt"], textwith8Chars);
    // create list of words wit length = 9
    var textwith9Chars = [];
    documentText
        .filter(function (word) { return word.length === 9; })
        .map(function (word) {
        if (!textwith9Chars.includes(word))
            return textwith8Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl9.txt"], textwith9Chars);
    // create list of words wit length = 10
    var textwith10Chars = [];
    documentText
        .filter(function (word) { return word.length === 10; })
        .map(function (word) {
        if (!textwith10Chars.includes(word))
            return textwith8Chars.push(word.trim());
    });
    writeData_1.writeResults(["data", "textLengthList", "tl10.txt"], textwith10Chars);
}
exports.textLengthClassifier = textLengthClassifier;
