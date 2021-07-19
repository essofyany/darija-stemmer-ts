import { objectSorter } from "./utils/objectSorter";
import { writeResults } from "./utils/writeData";

export function tl4Preffixes(wordList: string[]): void {
  let tl4_char_pref_freq_Obj: { [preffix: string]: number } = {};
  let tl4_pair_pref_freq_Obj: { [preffix: string]: number } = {};

  const slicedCharList = wordList.map((word: string) => word.slice(0, 1));
  //   console.log("slicedCharList: ", slicedCharList);
  const slicedPairList = wordList.map((word: string) => word.slice(0, 2));
  //   console.log("slicedPairList: ", slicedPairList);

  slicedCharList.forEach((word: string) => {
    if (word && word in tl4_char_pref_freq_Obj)
      return (tl4_char_pref_freq_Obj[word] += 1);
    else return (tl4_char_pref_freq_Obj[word] = 1);
  });
  // sort
  tl4_char_pref_freq_Obj = objectSorter(tl4_char_pref_freq_Obj);
  const resTl4Chars = Object.keys(tl4_char_pref_freq_Obj).map((char) => {
    // return `${char}: ${tl4_char_pref_freq_Obj[char]}`;
    return char;
  });
  writeResults(
    ["data", "preffixes", "tl4_char_pref_freq_Obj.txt"],
    resTl4Chars,
    "\n"
  );
  //   console.log("tl4_char_pref_freq_Obj: ", tl4_char_pref_freq_Obj);

  slicedPairList.forEach((word: string) => {
    if (word && word in tl4_pair_pref_freq_Obj)
      return (tl4_pair_pref_freq_Obj[word] += 1);
    else return (tl4_pair_pref_freq_Obj[word] = 1);
  });
  // sort
  tl4_pair_pref_freq_Obj = objectSorter(tl4_pair_pref_freq_Obj);
  const resTl4Pairs = Object.keys(tl4_pair_pref_freq_Obj).map((pair) => {
    // return `${pair}: ${tl4_pair_pref_freq_Obj[pair]}`;
    return pair;
  });
  writeResults(
    ["data", "preffixes", "tl4_pair_pref_freq_Obj.txt"],
    resTl4Pairs,
    "\n"
  );
  console.log("tl4 preffixe collecter executed");
}

export function tl5Preffixes(wordList: string[]): void {
  let tl5_char_pref_freq_Obj: { [preffix: string]: number } = {};
  let tl5_pair_pref_freq_Obj: { [preffix: string]: number } = {};
  let tl5_triplet_pref_freq_Obj: { [preffix: string]: number } = {};

  const slicedCharList = wordList.map((word: string) => word.slice(0, 1));
  //   console.log("slicedCharList: ", slicedCharList);
  const slicedPairList = wordList.map((word: string) => word.slice(0, 2));
  //   console.log("slicedPairList: ", slicedPairList);
  const slicedTripletList = wordList.map((word: string) => word.slice(0, 3));
  //   console.log("slicedTripletList: ", slicedTripletList);

  slicedCharList.forEach((word: string) => {
    if (word && word in tl5_char_pref_freq_Obj)
      return (tl5_char_pref_freq_Obj[word] += 1);
    else return (tl5_char_pref_freq_Obj[word] = 1);
  });
  // sort
  tl5_char_pref_freq_Obj = objectSorter(tl5_char_pref_freq_Obj);
  const resTl5Chars = Object.keys(tl5_char_pref_freq_Obj).map((char) => {
    // return `${char}: ${tl5_char_pref_freq_Obj[char]}`;
    return char;
  });
  writeResults(
    ["data", "preffixes", "tl5_char_pref_freq_Obj.txt"],
    resTl5Chars,
    "\n"
  );
  //   console.log("tl5_char_pref_freq_Obj: ", tl5_char_pref_freq_Obj);

  slicedPairList.forEach((word: string) => {
    if (word && word in tl5_pair_pref_freq_Obj)
      return (tl5_pair_pref_freq_Obj[word] += 1);
    else return (tl5_pair_pref_freq_Obj[word] = 1);
  });
  // sort
  tl5_pair_pref_freq_Obj = objectSorter(tl5_pair_pref_freq_Obj);
  const resTl5Pairs = Object.keys(tl5_pair_pref_freq_Obj).map((pair) => {
    // return `${pair}: ${tl5_pair_pref_freq_Obj[pair]}`;
    return pair;
  });
  writeResults(
    ["data", "preffixes", "tl5_pair_pref_freq_Obj.txt"],
    resTl5Pairs,
    "\n"
  );

  slicedTripletList.forEach((word: string) => {
    if (word && word in tl5_triplet_pref_freq_Obj)
      return (tl5_triplet_pref_freq_Obj[word] += 1);
    else return (tl5_triplet_pref_freq_Obj[word] = 1);
  });
  // sort
  tl5_triplet_pref_freq_Obj = objectSorter(tl5_triplet_pref_freq_Obj);
  const resTl5Triplet = Object.keys(tl5_triplet_pref_freq_Obj).map(
    (triplet) => {
      // return `${triplet}: ${tl5_triplet_pref_freq_Obj[triplet]}`;
      return triplet;
    }
  );
  writeResults(
    ["data", "preffixes", "tl5_triplet_pref_freq_Obj.txt"],
    resTl5Triplet,
    "\n"
  );
  console.log("tl5 preffixe collecter executed");
}
