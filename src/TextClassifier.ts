import { writeResults } from "./utils/writeData";

export class TextClassifier {
  // document is a big long text cleaned from unwanted words
  constructor(private document: string[]) {}

  // text classes are based on word length
  //   there will be 5 classes text with words that have 4
  //   characters , .... till text with words that have 8 chars
  textClassifier(): void {
    const textClasses: { [className: string]: string[] } = {};

    //   this will remove small word that has length < 4.
    const newDocument: string[] = this.document
      .filter((word: string) => word.length > 3)
      .map((word: string) => {
        return word.trim();
      });

    //   this will creates propreties in textClasses obj with list
    // of word that has the same length starting from length = 4 ===> length = 9
    textClasses.with4Chars = newDocument.filter(
      (word: string) => word.length === 4
    );
    textClasses.with5Chars = newDocument.filter(
      (word: string) => word.length === 5
    );
    textClasses.with6Chars = newDocument.filter(
      (word: string) => word.length === 6
    );
    textClasses.with7Chars = newDocument.filter(
      (word: string) => word.length === 7
    );
    textClasses.with8Chars = newDocument.filter(
      (word: string) => word.length === 8
    );
    textClasses.with9Chars = newDocument.filter(
      (word: string) => word.length === 9
    );
    textClasses.with10OrMoreChars = newDocument.filter(
      (word: string) => word.length >= 10
    );

    // remove duplicated words from each lass and save this text classes
    //  in data/textclasses/with[i]Chars.txt
    for (const className in textClasses) {
      console.log("textClasses with dups: ", textClasses[className].length);
      const noDupsList: string[] = [];
      textClasses[className].map((word: string) => {
        if (!noDupsList.includes(word)) return noDupsList.push(word);
      });
      textClasses[className] = noDupsList;
      console.log("textClasses with no dups: ", textClasses[className].length);
      writeResults(
        ["data", "textClasses", `${className}.txt`],
        textClasses[className]
      );
    }
  }
}
