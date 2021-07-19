interface PreffixesObject {
  pref41: string[];
  //   pref42: string[];
  pref51: string[];
  pref52: string[];
  //   //   pref53: string[];
  //   pref61: string[];
  //   pref62: string[];
  //   pref63: string[];
  //   //   pref64: string[];
  //   pref71: string[];
  //   pref72: string[];
  //   pref73: string[];
  //   pref74: string[];
  //   //   pref75: string[];
  //   pref81: string[];
  //   pref82: string[];
  //   pref83: string[];
  //   pref84: string[];
  //   pref85: string[];
}

export function runTest(text: string, preffixeList: string[]): void {
  let stemmed: string;

  // "الكلام الزين كيمشي في الدهازات وكيقرب المسافات";

  const splitedText = text.split(" ");
  // console.log("splitedText: ", splitedText);

  const a = splitedText.map((word) => {
    // 4 chars
    if (word && word.length === 4) {
      const slice1 = word.slice(0, 1);
      //   const slice2 = word.slice(0, 2);
      if (slice1 && preffixeList.includes(slice1)) {
        return word.replace(slice1, "");
      } else return word;
    }
    // 5 chars
    if (word && word.length >= 5) {
      // console.log("word 5>: ", word);
      const slice1 = word.slice(0, 1);
      const slice2 = word.slice(0, 2);
      const slice3 = word.slice(0, 3);
      if (slice1 && preffixeList.includes(slice1)) {
        return word.replace(slice1, "");
      } else if (slice2 && preffixeList.includes(slice2)) {
        console.log("sliced: ", word, slice2);
        return word.replace(slice2, "");
      } else if (slice3 && preffixeList.includes(slice3)) {
        return word.replace(slice3, "");
      } else return word;
    }
  });

  stemmed = a.join(" ");

  console.log("#################", "Test", "###################");
  console.log("Original Text: ", text);
  console.log("#######################");
  console.log("Stemmed Text: ", stemmed);
}
