"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tl5Preffixes = exports.tl4Preffixes = void 0;
var objectSorter_1 = require("./utils/objectSorter");
var writeData_1 = require("./utils/writeData");
function tl4Preffixes(wordList) {
    var tl4_char_pref_freq_Obj = {};
    var tl4_pair_pref_freq_Obj = {};
    var slicedCharList = wordList.map(function (word) { return word.slice(0, 1); });
    //   console.log("slicedCharList: ", slicedCharList);
    var slicedPairList = wordList.map(function (word) { return word.slice(0, 2); });
    //   console.log("slicedPairList: ", slicedPairList);
    slicedCharList.forEach(function (word) {
        if (word && word in tl4_char_pref_freq_Obj)
            return (tl4_char_pref_freq_Obj[word] += 1);
        else
            return (tl4_char_pref_freq_Obj[word] = 1);
    });
    // sort
    tl4_char_pref_freq_Obj = objectSorter_1.objectSorter(tl4_char_pref_freq_Obj);
    var resTl4Chars = Object.keys(tl4_char_pref_freq_Obj).map(function (char) {
        // return `${char}: ${tl4_char_pref_freq_Obj[char]}`;
        return char;
    });
    writeData_1.writeResults(["data", "preffixes", "tl4_char_pref_freq_Obj.txt"], resTl4Chars, "\n");
    //   console.log("tl4_char_pref_freq_Obj: ", tl4_char_pref_freq_Obj);
    slicedPairList.forEach(function (word) {
        if (word && word in tl4_pair_pref_freq_Obj)
            return (tl4_pair_pref_freq_Obj[word] += 1);
        else
            return (tl4_pair_pref_freq_Obj[word] = 1);
    });
    // sort
    tl4_pair_pref_freq_Obj = objectSorter_1.objectSorter(tl4_pair_pref_freq_Obj);
    var resTl4Pairs = Object.keys(tl4_pair_pref_freq_Obj).map(function (pair) {
        // return `${pair}: ${tl4_pair_pref_freq_Obj[pair]}`;
        return pair;
    });
    writeData_1.writeResults(["data", "preffixes", "tl4_pair_pref_freq_Obj.txt"], resTl4Pairs, "\n");
    console.log("tl4 preffixe collecter executed");
}
exports.tl4Preffixes = tl4Preffixes;
function tl5Preffixes(wordList) {
    var tl5_char_pref_freq_Obj = {};
    var tl5_pair_pref_freq_Obj = {};
    var tl5_triplet_pref_freq_Obj = {};
    var slicedCharList = wordList.map(function (word) { return word.slice(0, 1); });
    //   console.log("slicedCharList: ", slicedCharList);
    var slicedPairList = wordList.map(function (word) { return word.slice(0, 2); });
    //   console.log("slicedPairList: ", slicedPairList);
    var slicedTripletList = wordList.map(function (word) { return word.slice(0, 3); });
    //   console.log("slicedTripletList: ", slicedTripletList);
    slicedCharList.forEach(function (word) {
        if (word && word in tl5_char_pref_freq_Obj)
            return (tl5_char_pref_freq_Obj[word] += 1);
        else
            return (tl5_char_pref_freq_Obj[word] = 1);
    });
    // sort
    tl5_char_pref_freq_Obj = objectSorter_1.objectSorter(tl5_char_pref_freq_Obj);
    var resTl5Chars = Object.keys(tl5_char_pref_freq_Obj).map(function (char) {
        // return `${char}: ${tl5_char_pref_freq_Obj[char]}`;
        return char;
    });
    writeData_1.writeResults(["data", "preffixes", "tl5_char_pref_freq_Obj.txt"], resTl5Chars, "\n");
    //   console.log("tl5_char_pref_freq_Obj: ", tl5_char_pref_freq_Obj);
    slicedPairList.forEach(function (word) {
        if (word && word in tl5_pair_pref_freq_Obj)
            return (tl5_pair_pref_freq_Obj[word] += 1);
        else
            return (tl5_pair_pref_freq_Obj[word] = 1);
    });
    // sort
    tl5_pair_pref_freq_Obj = objectSorter_1.objectSorter(tl5_pair_pref_freq_Obj);
    var resTl5Pairs = Object.keys(tl5_pair_pref_freq_Obj).map(function (pair) {
        // return `${pair}: ${tl5_pair_pref_freq_Obj[pair]}`;
        return pair;
    });
    writeData_1.writeResults(["data", "preffixes", "tl5_pair_pref_freq_Obj.txt"], resTl5Pairs, "\n");
    slicedTripletList.forEach(function (word) {
        if (word && word in tl5_triplet_pref_freq_Obj)
            return (tl5_triplet_pref_freq_Obj[word] += 1);
        else
            return (tl5_triplet_pref_freq_Obj[word] = 1);
    });
    // sort
    tl5_triplet_pref_freq_Obj = objectSorter_1.objectSorter(tl5_triplet_pref_freq_Obj);
    var resTl5Triplet = Object.keys(tl5_triplet_pref_freq_Obj).map(function (triplet) {
        // return `${triplet}: ${tl5_triplet_pref_freq_Obj[triplet]}`;
        return triplet;
    });
    writeData_1.writeResults(["data", "preffixes", "tl5_triplet_pref_freq_Obj.txt"], resTl5Triplet, "\n");
    console.log("tl5 preffixe collecter executed");
}
exports.tl5Preffixes = tl5Preffixes;
