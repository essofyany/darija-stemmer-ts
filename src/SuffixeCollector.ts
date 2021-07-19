import { objectSorter } from "./utils/objectSorter";
import { writeResults } from "./utils/writeData";
import { readDocuments } from "./utils/readData";

export class SuffixeCollector {
  // suffixes extractor: this func will relay on the textClasses generated above
  // param: textClassPath = for multiple files :["textClass path separeted with '/'"]
  //    ex: ["data/textClasses/with4chars.txt", "data/textClasses/with5chars.txt", ...].
  //    for single file ["data/textClasses/with$chars.txt"]
  suffixesExtractor(textClassPath: string[]): void {
    const textClasses: { [className: string]: string[] } = {};
    // read data from textClasses directory and stor them in textClasses object
    textClassPath.forEach((path) => {
      const filePath = path.split("/");
      const fileName = filePath[filePath.length - 1].replace(".txt", "").trim();
      const data = readDocuments(filePath);
      textClasses[fileName] = data;

      console.log(`${fileName} length: `, textClasses[fileName].length);
    });

    // extract suffixes and save them.  ex: data/suffixes/for[i]word/oneCharsuff
    for (const className in textClasses) {
      let wordList = textClasses[className];
      let char_suff_freq_Obj: { [suffixe: string]: number } = {};
      let pair_suff_freq_Obj: { [suffixe: string]: number } = {};
      let triple_suff_freq_Obj: { [suffixe: string]: number } = {};
      let four_suff_freq_Obj: { [suffixe: string]: number } = {};
      let five_suff_freq_Obj: { [suffixe: string]: number } = {};

      if (className.includes("4")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for4word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for4word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );
      }

      if (className.includes("5")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for5word", "oneCharsuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for5word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for5word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );
      }
      if (className.includes("6")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for6word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for6word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for6word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );
      }
      if (className.includes("7")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) =>
          word.slice(word.length - 4, word.length)
        );
        console.log("slicedQuatreList: ", quatreList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for7word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for7word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for7word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );

        // extract quatre (three chars) suffixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_suff_freq_Obj)
            return (four_suff_freq_Obj[quatre] += 1);
          else return (four_suff_freq_Obj[quatre] = 1);
        });
        // sort
        four_suff_freq_Obj = objectSorter(four_suff_freq_Obj);
        const quatreSuffList = Object.keys(four_suff_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_suff_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for7word", "fourSuff.txt"],
          quatreSuffList,
          "\n"
        );
      }
      if (className.includes("8")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) =>
          word.slice(word.length - 4, word.length)
        );
        console.log("slicedQuatreList: ", quatreList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for8word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for8word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for8word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );

        // extract quatre (three chars) suffixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_suff_freq_Obj)
            return (four_suff_freq_Obj[quatre] += 1);
          else return (four_suff_freq_Obj[quatre] = 1);
        });
        // sort
        four_suff_freq_Obj = objectSorter(four_suff_freq_Obj);
        const quatreSuffList = Object.keys(four_suff_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_suff_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for8word", "fourSuff.txt"],
          quatreSuffList,
          "\n"
        );
      }
      if (className.includes("9")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) =>
          word.slice(word.length - 4, word.length)
        );
        console.log("slicedQuatreList: ", quatreList.length);

        const fifthList = wordList.map((word: string) =>
          word.slice(word.length - 5, word.length)
        );
        console.log("slicedfifthList: ", fifthList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for9word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for9word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for9word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );

        // extract quatre chars suffixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_suff_freq_Obj)
            return (four_suff_freq_Obj[quatre] += 1);
          else return (four_suff_freq_Obj[quatre] = 1);
        });
        // sort
        four_suff_freq_Obj = objectSorter(four_suff_freq_Obj);
        const quatreSuffList = Object.keys(four_suff_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_suff_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for9word", "fourSuff.txt"],
          quatreSuffList,
          "\n"
        );
        // extract five chars suffixe

        fifthList.forEach((fifth: string) => {
          if (fifth && fifth in five_suff_freq_Obj)
            return (five_suff_freq_Obj[fifth] += 1);
          else return (five_suff_freq_Obj[fifth] = 1);
        });
        // sort
        five_suff_freq_Obj = objectSorter(five_suff_freq_Obj);
        const fifthSuffList = Object.keys(five_suff_freq_Obj).map((fifth) => {
          return `${fifth}: ${five_suff_freq_Obj[fifth]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for9word", "fiveSuff.txt"],
          fifthSuffList,
          "\n"
        );
      }

      if (className.includes("10")) {
        const charList = wordList.map((word: string) =>
          word.slice(word.length - 1, word.length)
        );
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) =>
          word.slice(word.length - 2, word.length)
        );
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) =>
          word.slice(word.length - 3, word.length)
        );
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) =>
          word.slice(word.length - 4, word.length)
        );
        console.log("slicedQuatreList: ", quatreList.length);

        const fifthList = wordList.map((word: string) =>
          word.slice(word.length - 5, word.length)
        );
        console.log("slicedfifthList: ", fifthList.length);

        // extract one char suffixe

        charList.forEach((char: string) => {
          if (char && char in char_suff_freq_Obj)
            return (char_suff_freq_Obj[char] += 1);
          else char_suff_freq_Obj[char] = 1;
        });
        // sort
        char_suff_freq_Obj = objectSorter(char_suff_freq_Obj);
        const onecharSuffList = Object.keys(char_suff_freq_Obj).map((char) => {
          return `${char}: ${char_suff_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "suffixes", "for10word", "oneCharSuff.txt"],
          onecharSuffList,
          "\n"
        );

        // extract pair (two chars) suffixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_suff_freq_Obj)
            return (pair_suff_freq_Obj[pair] += 1);
          else return (pair_suff_freq_Obj[pair] = 1);
        });
        // sort
        pair_suff_freq_Obj = objectSorter(pair_suff_freq_Obj);
        const pairSuffList = Object.keys(pair_suff_freq_Obj).map((pair) => {
          return `${pair}: ${pair_suff_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "suffixes", "for10word", "pairSuff.txt"],
          pairSuffList,
          "\n"
        );

        // extract triple (three chars) suffixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_suff_freq_Obj)
            return (triple_suff_freq_Obj[triple] += 1);
          else return (triple_suff_freq_Obj[triple] = 1);
        });
        // sort
        triple_suff_freq_Obj = objectSorter(triple_suff_freq_Obj);
        const tripleSuffList = Object.keys(triple_suff_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_suff_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "suffixes", "for10word", "tripleSuff.txt"],
          tripleSuffList,
          "\n"
        );

        // extract quatre chars suffixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_suff_freq_Obj)
            return (four_suff_freq_Obj[quatre] += 1);
          else return (four_suff_freq_Obj[quatre] = 1);
        });
        // sort
        four_suff_freq_Obj = objectSorter(four_suff_freq_Obj);
        const quatreSuffList = Object.keys(four_suff_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_suff_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for10word", "fourSuff.txt"],
          quatreSuffList,
          "\n"
        );
        // extract five chars suffixe

        fifthList.forEach((fifth: string) => {
          if (fifth && fifth in five_suff_freq_Obj)
            return (five_suff_freq_Obj[fifth] += 1);
          else return (five_suff_freq_Obj[fifth] = 1);
        });
        // sort
        five_suff_freq_Obj = objectSorter(five_suff_freq_Obj);
        const fifthSuffList = Object.keys(five_suff_freq_Obj).map((fifth) => {
          return `${fifth}: ${five_suff_freq_Obj[fifth]}`;
          //   return triple;
        });
        writeResults(
          ["data", "suffixes", "for10word", "fiveSuff.txt"],
          fifthSuffList,
          "\n"
        );
      }
    }
  }
}

// result of this class should be a list of Suffixes for each word length category
