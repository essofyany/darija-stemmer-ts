"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixeCollector = void 0;
var objectSorter_1 = require("./utils/objectSorter");
var writeData_1 = require("./utils/writeData");
var readData_1 = require("./utils/readData");
var PrefixeCollector = /** @class */ (function () {
    // document is a big long text cleaned from unwanted words
    function PrefixeCollector(document) {
        this.document = document;
    }
    // text classes are based on word length
    //   there will be 5 classes text with words that have 4
    //   characters , .... till text with words that have 8 chars
    PrefixeCollector.prototype.textClassifier = function () {
        var textClasses = {};
        //   this will remove small word that has length < 4.
        var newDocument = this.document
            .filter(function (word) { return word.length > 3; })
            .map(function (word) {
            return word.trim();
        });
        //   this will creates propreties in textClasses obj with list
        // of word that has the same length starting from length = 4 ===> length = 9
        textClasses.with4Chars = newDocument.filter(function (word) { return word.length === 4; });
        textClasses.with5Chars = newDocument.filter(function (word) { return word.length === 5; });
        textClasses.with6Chars = newDocument.filter(function (word) { return word.length === 6; });
        textClasses.with7Chars = newDocument.filter(function (word) { return word.length === 7; });
        textClasses.with8Chars = newDocument.filter(function (word) { return word.length === 8; });
        textClasses.with9Chars = newDocument.filter(function (word) { return word.length === 9; });
        textClasses.with10OrMoreChars = newDocument.filter(function (word) { return word.length >= 10; });
        var _loop_1 = function (className) {
            console.log("textClasses with dups: ", textClasses[className].length);
            var noDupsList = [];
            textClasses[className].map(function (word) {
                if (!noDupsList.includes(word))
                    return noDupsList.push(word);
            });
            textClasses[className] = noDupsList;
            console.log("textClasses with no dups: ", textClasses[className].length);
            writeData_1.writeResults(["data", "textClasses", className + ".txt"], textClasses[className]);
        };
        // remove duplicated words from each lass and save this text classes
        //  in data/textclasses/with[i]Chars.txt
        for (var className in textClasses) {
            _loop_1(className);
        }
    };
    // prefixes extractor: this func will relay on the textClasses generated above
    // param: textClassPath = for multiple files :["textClass path separeted with '/'"]
    //    ex: ["data/textClasses/with4chars.txt", "data/textClasses/with5chars.txt", ...].
    //    for single file ["data/textClasses/with$chars.txt"]
    PrefixeCollector.prototype.prefixesExtractor = function (textClassPath) {
        var textClasses = {};
        // read data from textClasses directory and stor them in textClasses object
        textClassPath.forEach(function (path) {
            var filePath = path.split("/");
            var fileName = filePath[filePath.length - 1].replace(".txt", "").trim();
            var data = readData_1.readDocuments(filePath);
            textClasses[fileName] = data;
            console.log(fileName + " length: ", textClasses[fileName].length);
        });
        var _loop_2 = function (className) {
            var wordList = textClasses[className];
            var char_pref_freq_Obj = {};
            var pair_pref_freq_Obj = {};
            var triple_pref_freq_Obj = {};
            var four_pref_freq_Obj = {};
            var five_pref_freq_Obj = {};
            if (className.includes("4")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for4word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for4word", "pairPref.txt"], pairPrefList, "\n");
            }
            if (className.includes("5")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for5word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for5word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for5word", "triplePref.txt"], triplePrefList, "\n");
            }
            if (className.includes("6")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for6word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for6word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for6word", "triplePref.txt"], triplePrefList, "\n");
            }
            if (className.includes("7")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) { return word.slice(0, 4); });
                console.log("slicedQuatreList: ", quatreList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for7word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for7word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for7word", "triplePref.txt"], triplePrefList, "\n");
                // extract triple (three chars) prefixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_pref_freq_Obj)
                        return (four_pref_freq_Obj[quatre] += 1);
                    else
                        return (four_pref_freq_Obj[quatre] = 1);
                });
                // sort
                four_pref_freq_Obj = objectSorter_1.objectSorter(four_pref_freq_Obj);
                var quatrePrefList = Object.keys(four_pref_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_pref_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for7word", "fourPref.txt"], quatrePrefList, "\n");
            }
            if (className.includes("8")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) { return word.slice(0, 4); });
                console.log("slicedQuatreList: ", quatreList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for8word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for8word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for8word", "triplePref.txt"], triplePrefList, "\n");
                // extract triple (three chars) prefixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_pref_freq_Obj)
                        return (four_pref_freq_Obj[quatre] += 1);
                    else
                        return (four_pref_freq_Obj[quatre] = 1);
                });
                // sort
                four_pref_freq_Obj = objectSorter_1.objectSorter(four_pref_freq_Obj);
                var quatrePrefList = Object.keys(four_pref_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_pref_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for8word", "fourPref.txt"], quatrePrefList, "\n");
            }
            if (className.includes("9")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) { return word.slice(0, 4); });
                console.log("slicedQuatreList: ", quatreList.length);
                var fifthList = wordList.map(function (word) { return word.slice(0, 5); });
                console.log("slicedfifthList: ", fifthList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for9word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for9word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for9word", "triplePref.txt"], triplePrefList, "\n");
                // extract triple (three chars) prefixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_pref_freq_Obj)
                        return (four_pref_freq_Obj[quatre] += 1);
                    else
                        return (four_pref_freq_Obj[quatre] = 1);
                });
                // sort
                four_pref_freq_Obj = objectSorter_1.objectSorter(four_pref_freq_Obj);
                var quatrePrefList = Object.keys(four_pref_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_pref_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for9word", "fourPref.txt"], quatrePrefList, "\n");
                // extract triple (three chars) prefixe
                fifthList.forEach(function (fifth) {
                    if (fifth && fifth in five_pref_freq_Obj)
                        return (five_pref_freq_Obj[fifth] += 1);
                    else
                        return (five_pref_freq_Obj[fifth] = 1);
                });
                // sort
                five_pref_freq_Obj = objectSorter_1.objectSorter(five_pref_freq_Obj);
                var fifthPrefList = Object.keys(five_pref_freq_Obj).map(function (fifth) {
                    return fifth + ": " + five_pref_freq_Obj[fifth];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for9word", "fivePref.txt"], fifthPrefList, "\n");
            }
            if (className.includes("10")) {
                var charList = wordList.map(function (word) { return word.slice(0, 1); });
                console.log("slicedCharList: ", charList.length);
                var pairList = wordList.map(function (word) { return word.slice(0, 2); });
                console.log("slicedPairList: ", pairList.length);
                var tripleList = wordList.map(function (word) { return word.slice(0, 3); });
                console.log("slicedTripleList: ", tripleList.length);
                var quatreList = wordList.map(function (word) { return word.slice(0, 4); });
                console.log("slicedQuatreList: ", quatreList.length);
                var fifthList = wordList.map(function (word) { return word.slice(0, 5); });
                console.log("slicedfifthList: ", fifthList.length);
                // extract one char prefixe
                charList.forEach(function (char) {
                    if (char && char in char_pref_freq_Obj)
                        return (char_pref_freq_Obj[char] += 1);
                    else
                        char_pref_freq_Obj[char] = 1;
                });
                // sort
                char_pref_freq_Obj = objectSorter_1.objectSorter(char_pref_freq_Obj);
                var onecharPrefList = Object.keys(char_pref_freq_Obj).map(function (char) {
                    return char + ": " + char_pref_freq_Obj[char];
                    //   return char;
                });
                writeData_1.writeResults(["data", "preffixes", "for10word", "oneCharPref.txt"], onecharPrefList, "\n");
                // extract pair (two chars) prefixe
                pairList.forEach(function (pair) {
                    if (pair && pair in pair_pref_freq_Obj)
                        return (pair_pref_freq_Obj[pair] += 1);
                    else
                        return (pair_pref_freq_Obj[pair] = 1);
                });
                // sort
                pair_pref_freq_Obj = objectSorter_1.objectSorter(pair_pref_freq_Obj);
                var pairPrefList = Object.keys(pair_pref_freq_Obj).map(function (pair) {
                    return pair + ": " + pair_pref_freq_Obj[pair];
                    //   return pair;
                });
                writeData_1.writeResults(["data", "preffixes", "for10word", "pairPref.txt"], pairPrefList, "\n");
                // extract triple (three chars) prefixe
                tripleList.forEach(function (triple) {
                    if (triple && triple in triple_pref_freq_Obj)
                        return (triple_pref_freq_Obj[triple] += 1);
                    else
                        return (triple_pref_freq_Obj[triple] = 1);
                });
                // sort
                triple_pref_freq_Obj = objectSorter_1.objectSorter(triple_pref_freq_Obj);
                var triplePrefList = Object.keys(triple_pref_freq_Obj).map(function (triple) {
                    return triple + ": " + triple_pref_freq_Obj[triple];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for10word", "triplePref.txt"], triplePrefList, "\n");
                // extract triple (three chars) prefixe
                quatreList.forEach(function (quatre) {
                    if (quatre && quatre in four_pref_freq_Obj)
                        return (four_pref_freq_Obj[quatre] += 1);
                    else
                        return (four_pref_freq_Obj[quatre] = 1);
                });
                // sort
                four_pref_freq_Obj = objectSorter_1.objectSorter(four_pref_freq_Obj);
                var quatrePrefList = Object.keys(four_pref_freq_Obj).map(function (quatre) {
                    return quatre + ": " + four_pref_freq_Obj[quatre];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for10word", "fourPref.txt"], quatrePrefList, "\n");
                // extract triple (three chars) prefixe
                fifthList.forEach(function (fifth) {
                    if (fifth && fifth in five_pref_freq_Obj)
                        return (five_pref_freq_Obj[fifth] += 1);
                    else
                        return (five_pref_freq_Obj[fifth] = 1);
                });
                // sort
                five_pref_freq_Obj = objectSorter_1.objectSorter(five_pref_freq_Obj);
                var fifthPrefList = Object.keys(five_pref_freq_Obj).map(function (fifth) {
                    return fifth + ": " + five_pref_freq_Obj[fifth];
                    //   return triple;
                });
                writeData_1.writeResults(["data", "preffixes", "for10word", "fivePref.txt"], fifthPrefList, "\n");
            }
        };
        // extract prefixes and save them.  ex: data/prefixes/for[i]word/oneCharPref
        for (var className in textClasses) {
            _loop_2(className);
        }
    };
    return PrefixeCollector;
}());
exports.PrefixeCollector = PrefixeCollector;
// result of this class should be a list of prefixes for each word length category
