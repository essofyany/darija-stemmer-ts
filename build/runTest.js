"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTest = void 0;
function runTest(text, preffixeList) {
    var stemmed;
    // "الكلام الزين كيمشي في الدهازات وكيقرب المسافات";
    var splitedText = text.split(" ");
    // console.log("splitedText: ", splitedText);
    var a = splitedText.map(function (word) {
        // 4 chars
        if (word && word.length === 4) {
            var slice1 = word.slice(0, 1);
            //   const slice2 = word.slice(0, 2);
            if (slice1 && preffixeList.includes(slice1)) {
                return word.replace(slice1, "");
            }
            else
                return word;
        }
        // 5 chars
        if (word && word.length >= 5) {
            // console.log("word 5>: ", word);
            var slice1 = word.slice(0, 1);
            var slice2 = word.slice(0, 2);
            var slice3 = word.slice(0, 3);
            if (slice1 && preffixeList.includes(slice1)) {
                return word.replace(slice1, "");
            }
            else if (slice2 && preffixeList.includes(slice2)) {
                console.log("sliced: ", word, slice2);
                return word.replace(slice2, "");
            }
            else if (slice3 && preffixeList.includes(slice3)) {
                return word.replace(slice3, "");
            }
            else
                return word;
        }
    });
    stemmed = a.join(" ");
    console.log("#################", "Test", "###################");
    console.log("Original Text: ", text);
    console.log("#######################");
    console.log("Stemmed Text: ", stemmed);
}
exports.runTest = runTest;
