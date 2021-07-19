import { objectSorter } from "./utils/objectSorter";
import { writeResults } from "./utils/writeData";
import { readDocuments } from "./utils/readData";

export class PrefixeCollector {
  // prefixes extractor: this func will relay on the textClasses generated above
  // param: textClassPath = for multiple files :["textClass path separeted with '/'"]
  //    ex: ["data/textClasses/with4chars.txt", "data/textClasses/with5chars.txt", ...].
  //    for single file ["data/textClasses/with$chars.txt"]
  prefixesExtractor(textClassPath: string[]): void {
    const textClasses: { [className: string]: string[] } = {};
    // read data from textClasses directory and stor them in textClasses object
    textClassPath.forEach((path) => {
      const filePath = path.split("/");
      const fileName = filePath[filePath.length - 1].replace(".txt", "").trim();
      const data = readDocuments(filePath);
      textClasses[fileName] = data;

      console.log(`${fileName} length: `, textClasses[fileName].length);
    });

    // extract prefixes and save them.  ex: data/prefixes/for[i]word/oneCharPref
    for (const className in textClasses) {
      let wordList = textClasses[className];
      let char_pref_freq_Obj: { [prefixe: string]: number } = {};
      let pair_pref_freq_Obj: { [prefixe: string]: number } = {};
      let triple_pref_freq_Obj: { [prefixe: string]: number } = {};
      let four_pref_freq_Obj: { [prefixe: string]: number } = {};
      let five_pref_freq_Obj: { [prefixe: string]: number } = {};

      if (className.includes("4")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for4word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for4word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );
      }

      if (className.includes("5")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for5word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for5word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for5word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );
      }
      if (className.includes("6")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for6word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for6word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for6word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );
      }
      if (className.includes("7")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) => word.slice(0, 4));
        console.log("slicedQuatreList: ", quatreList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for7word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for7word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for7word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_pref_freq_Obj)
            return (four_pref_freq_Obj[quatre] += 1);
          else return (four_pref_freq_Obj[quatre] = 1);
        });
        // sort
        four_pref_freq_Obj = objectSorter(four_pref_freq_Obj);
        const quatrePrefList = Object.keys(four_pref_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_pref_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for7word", "fourPref.txt"],
          quatrePrefList,
          "\n"
        );
      }
      if (className.includes("8")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) => word.slice(0, 4));
        console.log("slicedQuatreList: ", quatreList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for8word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for8word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for8word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_pref_freq_Obj)
            return (four_pref_freq_Obj[quatre] += 1);
          else return (four_pref_freq_Obj[quatre] = 1);
        });
        // sort
        four_pref_freq_Obj = objectSorter(four_pref_freq_Obj);
        const quatrePrefList = Object.keys(four_pref_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_pref_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for8word", "fourPref.txt"],
          quatrePrefList,
          "\n"
        );
      }
      if (className.includes("9")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) => word.slice(0, 4));
        console.log("slicedQuatreList: ", quatreList.length);

        const fifthList = wordList.map((word: string) => word.slice(0, 5));
        console.log("slicedfifthList: ", fifthList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for9word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for9word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for9word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_pref_freq_Obj)
            return (four_pref_freq_Obj[quatre] += 1);
          else return (four_pref_freq_Obj[quatre] = 1);
        });
        // sort
        four_pref_freq_Obj = objectSorter(four_pref_freq_Obj);
        const quatrePrefList = Object.keys(four_pref_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_pref_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for9word", "fourPref.txt"],
          quatrePrefList,
          "\n"
        );
        // extract triple (three chars) prefixe

        fifthList.forEach((fifth: string) => {
          if (fifth && fifth in five_pref_freq_Obj)
            return (five_pref_freq_Obj[fifth] += 1);
          else return (five_pref_freq_Obj[fifth] = 1);
        });
        // sort
        five_pref_freq_Obj = objectSorter(five_pref_freq_Obj);
        const fifthPrefList = Object.keys(five_pref_freq_Obj).map((fifth) => {
          return `${fifth}: ${five_pref_freq_Obj[fifth]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for9word", "fivePref.txt"],
          fifthPrefList,
          "\n"
        );
      }
      if (className.includes("10")) {
        const charList = wordList.map((word: string) => word.slice(0, 1));
        console.log("slicedCharList: ", charList.length);

        const pairList = wordList.map((word: string) => word.slice(0, 2));
        console.log("slicedPairList: ", pairList.length);

        const tripleList = wordList.map((word: string) => word.slice(0, 3));
        console.log("slicedTripleList: ", tripleList.length);

        const quatreList = wordList.map((word: string) => word.slice(0, 4));
        console.log("slicedQuatreList: ", quatreList.length);

        const fifthList = wordList.map((word: string) => word.slice(0, 5));
        console.log("slicedfifthList: ", fifthList.length);

        // extract one char prefixe

        charList.forEach((char: string) => {
          if (char && char in char_pref_freq_Obj)
            return (char_pref_freq_Obj[char] += 1);
          else char_pref_freq_Obj[char] = 1;
        });
        // sort
        char_pref_freq_Obj = objectSorter(char_pref_freq_Obj);
        const onecharPrefList = Object.keys(char_pref_freq_Obj).map((char) => {
          return `${char}: ${char_pref_freq_Obj[char]}`;
          //   return char;
        });
        writeResults(
          ["data", "preffixes", "for10word", "oneCharPref.txt"],
          onecharPrefList,
          "\n"
        );

        // extract pair (two chars) prefixe

        pairList.forEach((pair: string) => {
          if (pair && pair in pair_pref_freq_Obj)
            return (pair_pref_freq_Obj[pair] += 1);
          else return (pair_pref_freq_Obj[pair] = 1);
        });
        // sort
        pair_pref_freq_Obj = objectSorter(pair_pref_freq_Obj);
        const pairPrefList = Object.keys(pair_pref_freq_Obj).map((pair) => {
          return `${pair}: ${pair_pref_freq_Obj[pair]}`;
          //   return pair;
        });
        writeResults(
          ["data", "preffixes", "for10word", "pairPref.txt"],
          pairPrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        tripleList.forEach((triple: string) => {
          if (triple && triple in triple_pref_freq_Obj)
            return (triple_pref_freq_Obj[triple] += 1);
          else return (triple_pref_freq_Obj[triple] = 1);
        });
        // sort
        triple_pref_freq_Obj = objectSorter(triple_pref_freq_Obj);
        const triplePrefList = Object.keys(triple_pref_freq_Obj).map(
          (triple) => {
            return `${triple}: ${triple_pref_freq_Obj[triple]}`;
            //   return triple;
          }
        );
        writeResults(
          ["data", "preffixes", "for10word", "triplePref.txt"],
          triplePrefList,
          "\n"
        );

        // extract triple (three chars) prefixe

        quatreList.forEach((quatre: string) => {
          if (quatre && quatre in four_pref_freq_Obj)
            return (four_pref_freq_Obj[quatre] += 1);
          else return (four_pref_freq_Obj[quatre] = 1);
        });
        // sort
        four_pref_freq_Obj = objectSorter(four_pref_freq_Obj);
        const quatrePrefList = Object.keys(four_pref_freq_Obj).map((quatre) => {
          return `${quatre}: ${four_pref_freq_Obj[quatre]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for10word", "fourPref.txt"],
          quatrePrefList,
          "\n"
        );
        // extract triple (three chars) prefixe

        fifthList.forEach((fifth: string) => {
          if (fifth && fifth in five_pref_freq_Obj)
            return (five_pref_freq_Obj[fifth] += 1);
          else return (five_pref_freq_Obj[fifth] = 1);
        });
        // sort
        five_pref_freq_Obj = objectSorter(five_pref_freq_Obj);
        const fifthPrefList = Object.keys(five_pref_freq_Obj).map((fifth) => {
          return `${fifth}: ${five_pref_freq_Obj[fifth]}`;
          //   return triple;
        });
        writeResults(
          ["data", "preffixes", "for10word", "fivePref.txt"],
          fifthPrefList,
          "\n"
        );
      }
    }
  }
}

// result of this class should be a list of prefixes for each word length category
