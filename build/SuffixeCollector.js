"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuffixeCollector = void 0;
var objectSorter_1 = require("./utils/objectSorter");
var writeData_1 = require("./utils/writeData");
var readData_1 = require("./utils/readData");
var SuffixeCollector = /** @class */ (function () {
    function SuffixeCollector() {
    }
    // suffixes extractor: this func will relay on the textClasses generated above
    // param: textClassPath = for multiple files :["textClass path separeted with '/'"]
    //    ex: ["data/textClasses/with4chars.txt", "data/textClasses/with5chars.txt", ...].
    //    for single file ["data/textClasses/with$chars.txt"]
    SuffixeCollector.prototype.suffixesExtractor = function (textClassPath) {
        var textClasses = {};
        // read data from textClasses directory and stor them in textClasses object
        textClassPath.forEach(function (path) {
            var filePath = path.split("/");
            var fileName = filePath[filePath.length - 1].replace(".txt", "").trim();
            var data = readData_1.readDocuments(filePath);
            textClasses[fileName] = data;
            console.log(fileName + " length: ", textClasses[fileName].length);
        });
        var _loop_1 = function (className) {
            var wordList = textClasses[className];
            var char_suff_freq_Obj = {};
            var pair_suff_freq_Obj = {};
            var triple_suff_freq_Obj = {};
            var four_suff_freq_Obj = {};
            var five_suff_freq_Obj = {};
            if (className.includes("4")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for4word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for4word", "pairSuff.txt"], pairSuffList, "\n");
            }
            if (className.includes("5")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for5word", "oneCharsuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for5word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for5word", "tripleSuff.txt"], tripleSuffList, "\n");
            }
            if (className.includes("6")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for6word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for6word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for6word", "tripleSuff.txt"], tripleSuffList, "\n");
            }
            if (className.includes("7")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) {
                    return word.slice(word.length - 4, word.length);
                });
                console.log("slicedQuatreList: ", quatreList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for7word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for7word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for7word", "tripleSuff.txt"], tripleSuffList, "\n");
                // extract quatre (three chars) suffixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_suff_freq_Obj)
                        return (four_suff_freq_Obj[quatre] += 1);
                    else
                        return (four_suff_freq_Obj[quatre] = 1);
                });
                // sort
                four_suff_freq_Obj = objectSorter_1.objectSorter(four_suff_freq_Obj);
                var quatreSuffList = Object.keys(four_suff_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_suff_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for7word", "fourSuff.txt"], quatreSuffList, "\n");
            }
            if (className.includes("8")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) {
                    return word.slice(word.length - 4, word.length);
                });
                console.log("slicedQuatreList: ", quatreList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for8word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for8word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for8word", "tripleSuff.txt"], tripleSuffList, "\n");
                // extract quatre (three chars) suffixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_suff_freq_Obj)
                        return (four_suff_freq_Obj[quatre] += 1);
                    else
                        return (four_suff_freq_Obj[quatre] = 1);
                });
                // sort
                four_suff_freq_Obj = objectSorter_1.objectSorter(four_suff_freq_Obj);
                var quatreSuffList = Object.keys(four_suff_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_suff_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for8word", "fourSuff.txt"], quatreSuffList, "\n");
            }
            if (className.includes("9")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) {
                    return word.slice(word.length - 4, word.length);
                });
                console.log("slicedQuatreList: ", quatreList.length);
                var fifthList = wordList.map(function (word) {
                    return word.slice(word.length - 5, word.length);
                });
                console.log("slicedfifthList: ", fifthList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for9word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for9word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for9word", "tripleSuff.txt"], tripleSuffList, "\n");
                // extract quatre chars suffixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_suff_freq_Obj)
                        return (four_suff_freq_Obj[quatre] += 1);
                    else
                        return (four_suff_freq_Obj[quatre] = 1);
                });
                // sort
                four_suff_freq_Obj = objectSorter_1.objectSorter(four_suff_freq_Obj);
                var quatreSuffList = Object.keys(four_suff_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_suff_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for9word", "fourSuff.txt"], quatreSuffList, "\n");
                // extract five chars suffixe
                fifthList.forEach(function (fifth) {
                    if (fifth && fifth in five_suff_freq_Obj)
                        return (five_suff_freq_Obj[fifth] += 1);
                    else
                        return (five_suff_freq_Obj[fifth] = 1);
                });
                // sort
                five_suff_freq_Obj = objectSorter_1.objectSorter(five_suff_freq_Obj);
                var fifthSuffList = Object.keys(five_suff_freq_Obj).map(function (fifth) {
                    return fifth + ": " + five_suff_freq_Obj[fifth];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for9word", "fiveSuff.txt"], fifthSuffList, "\n");
            }
            if (className.includes("10")) {
                var charList = wordList.map(function (word) {
                    return word.slice(word.length - 1, word.length);
                });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) {
                    return word.slice(word.length - 2, word.length);
                });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) {
                    return word.slice(word.length - 3, word.length);
                });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) {
                    return word.slice(word.length - 4, word.length);
                });
                console.log("slicedQuatreList: ", quatreList.length);
                var fifthList = wordList.map(function (word) {
                    return word.slice(word.length - 5, word.length);
                });
                console.log("slicedfifthList: ", fifthList.length);
                // extract one char suffixe
                charList.forEach(function (char) {
                    if (char && char in char_suff_freq_Obj)
                        return (char_suff_freq_Obj[char] += 1);
                    else
                        char_suff_freq_Obj[char] = 1;
                });
                // sort
                char_suff_freq_Obj = objectSorter_1.objectSorter(char_suff_freq_Obj);
                var onecharSuffList = Object.keys(char_suff_freq_Obj).map(function (char) {
                    return char + ": " + char_suff_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "suffixes", "for10word", "oneCharSuff.txt"], onecharSuffList, "\n");
                // extract pair (two chars) suffixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_suff_freq_Obj)
                        return (pair_suff_freq_Obj[pair] += 1);
                    else
                        return (pair_suff_freq_Obj[pair] = 1);
                });
                // sort
                pair_suff_freq_Obj = objectSorter_1.objectSorter(pair_suff_freq_Obj);
                var pairSuffList = Object.keys(pair_suff_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_suff_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "suffixes", "for10word", "pairSuff.txt"], pairSuffList, "\n");
                // extract triple (three chars) suffixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_suff_freq_Obj)
                        return (triple_suff_freq_Obj[triple] += 1);
                    else
                        return (triple_suff_freq_Obj[triple] = 1);
                });
                // sort
                triple_suff_freq_Obj = objectSorter_1.objectSorter(triple_suff_freq_Obj);
                var tripleSuffList = Object.keys(triple_suff_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_suff_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for10word", "tripleSuff.txt"], tripleSuffList, "\n");
                // extract quatre chars suffixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_suff_freq_Obj)
                        return (four_suff_freq_Obj[quatre] += 1);
                    else
                        return (four_suff_freq_Obj[quatre] = 1);
                });
                // sort
                four_suff_freq_Obj = objectSorter_1.objectSorter(four_suff_freq_Obj);
                var quatreSuffList = Object.keys(four_suff_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_suff_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for10word", "fourSuff.txt"], quatreSuffList, "\n");
                // extract five chars suffixe
                fifthList.forEach(function (fifth) {
                    if (fifth && fifth in five_suff_freq_Obj)
                        return (five_suff_freq_Obj[fifth] += 1);
                    else
                        return (five_suff_freq_Obj[fifth] = 1);
                });
                // sort
                five_suff_freq_Obj = objectSorter_1.objectSorter(five_suff_freq_Obj);
                var fifthSuffList = Object.keys(five_suff_freq_Obj).map(function (fifth) {
                    return fifth + ": " + five_suff_freq_Obj[fifth];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "suffixes", "for10word", "fiveSuff.txt"], fifthSuffList, "\n");
            }
        };
        // extract suffixes and save them.  ex: data/suffixes/for[i]word/oneCharsuff
        for (var className in textClasses) {
            _loop_1(className);
        }
    };
    return SuffixeCollector;
}());
exports.SuffixeCollector = SuffixeCollector;
// result of this class should be a list of Suffixes for each word length category
