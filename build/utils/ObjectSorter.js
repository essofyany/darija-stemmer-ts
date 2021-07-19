"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSorter = void 0;
function objectSorter(pairFreqObj) {
    var entries = Object.entries(pairFreqObj);
    var sorte = entries.sort(function (a, b) { return b[1] - a[1]; });
    return Object.fromEntries(sorte);
}
exports.objectSorter = objectSorter;
