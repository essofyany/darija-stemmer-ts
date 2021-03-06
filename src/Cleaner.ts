export class Cleaner {
  private regex_chars: RegExp;
  private regex_emojis: RegExp;
  private regex_0: RegExp;
  private regex_1: RegExp;
  private regex_2: RegExp;
  private regex_3: RegExp;
  private regex_4: RegExp;
  private regex_5: RegExp;
  private regex_6: RegExp;
  private regex_7: RegExp;
  private regex_8: RegExp;
  private regex_9: RegExp;
  private regex_11: RegExp;
  private regex_12: RegExp;
  private regex_13: RegExp;
  private regex_14: RegExp;
  private regex_15: RegExp;
  private regex_16: RegExp;
  private regex_17: RegExp;
  private regex_18: RegExp;
  private regex_19: RegExp;
  private regex_10: RegExp;
  private regex_20: RegExp;
  private regex_21: RegExp;
  private regex_22: RegExp;
  private regex_23: RegExp;
  private regex_24: RegExp;
  private regex_25: RegExp;
  private regex_26: RegExp;
  private regex_27: RegExp;
  private regex_28: RegExp;
  private regex_29: RegExp;
  private regex_30: RegExp;
  private regex_31: RegExp;

  private regex_32: RegExp;
  private regex_33: RegExp;
  private regex_34: RegExp;
  private regex_35: RegExp;

  constructor() {
    this.regex_chars = /\w+/g;
    // regular expression for removing emojis
    this.regex_emojis =
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    //  regular expression for removing symbols
    this.regex_0 = /\@{1,}/gm;
    this.regex_1 = /\/{1,}/gm;
    this.regex_2 = /\.{1,}/gm;
    this.regex_3 = /\#{1,}/gm;
    this.regex_4 = /\:{1,}/gm;
    this.regex_5 = /\?{1,}/gm;
    this.regex_6 = /\'{1,}/gm;
    this.regex_7 = /\"{1,}/gm;
    this.regex_8 = /\`{1,}/gm;
    this.regex_9 = /\*{1,}/gm;
    this.regex_11 = /\${1,}/gm;
    this.regex_12 = /\&{1,}/gm;
    this.regex_13 = /\%{1,}/gm;
    this.regex_14 = /\({1,}/gm;
    this.regex_15 = /\){1,}/gm;
    this.regex_16 = /\={1,}/gm;
    this.regex_17 = /\[{1,}/gm;
    this.regex_18 = /\]{1,}/gm;
    this.regex_19 = /\+{1,}/gm;
    this.regex_10 = /\-{1,}/gm;
    this.regex_20 = /\<{1,}/gm;
    this.regex_21 = /\>{1,}/gm;
    this.regex_22 = /\!{1,}/gm;
    this.regex_23 = /\؟{1,}/gm;
    this.regex_24 = /\…{1,}/gm;
    this.regex_25 = /\،{1,}/gm;
    this.regex_26 = /\\{1,}/gm;
    this.regex_27 = /\é{1,}/gm;
    this.regex_28 = /\à{1,}/gm;
    this.regex_29 = /\—{1,}/gm;
    this.regex_30 = /\,{1,}/gm;
    this.regex_31 = /\;{1,}/gm;
    // letters with diacritics
    this.regex_32 = /\گ{1,}/gm;
    this.regex_33 = /\آ{1,}/gm;
    this.regex_34 = /\أ{1,}/gm;
    this.regex_35 = /\إ{1,}/gm;
  }

  private removeEmojis(document: string[]): string[] {
    const cleanedFromEmojis = document.map((word: string): string => {
      return word.replace(this.regex_emojis, "");
    });
    return cleanedFromEmojis;
  }

  private removeChars(document: string[]): string[] {
    // chars like abcd ABCS ....
    let cleanedFromChars = document.map((word: string): string => {
      return word.replace(this.regex_chars, "");
    });
    return cleanedFromChars;
  }

  private deepCleaner(document: string[]): string[] {
    // remove critical chars and diacritics
    return document.map((word: string): string => {
      return word
        .replace(this.regex_chars, "")
        .replace(this.regex_emojis, "")
        .replace(this.regex_0, "")
        .replace(this.regex_1, "")
        .replace(this.regex_2, "")
        .replace(this.regex_3, "")
        .replace(this.regex_4, "")
        .replace(this.regex_5, "")
        .replace(this.regex_6, "")
        .replace(this.regex_7, "")
        .replace(this.regex_8, "")
        .replace(this.regex_9, "")
        .replace(this.regex_10, "")
        .replace(this.regex_11, "")
        .replace(this.regex_12, "")
        .replace(this.regex_13, "")
        .replace(this.regex_14, "")
        .replace(this.regex_15, "")
        .replace(this.regex_16, "")
        .replace(this.regex_17, "")
        .replace(this.regex_18, "")
        .replace(this.regex_19, "")
        .replace(this.regex_20, "")
        .replace(this.regex_21, "")
        .replace(this.regex_22, "")
        .replace(this.regex_23, "")
        .replace(this.regex_24, "")
        .replace(this.regex_25, "")
        .replace(this.regex_26, "")
        .replace(this.regex_27, "")
        .replace(this.regex_28, "")
        .replace(this.regex_29, "")
        .replace(this.regex_30, "")
        .replace(this.regex_31, "")
        .replace(this.regex_32, "ڪ")
        .replace(this.regex_33, "ا")
        .replace(this.regex_34, "ا")
        .replace(this.regex_35, "ا");
    });
  }

  private normalizor(document: string[]): string[] {
    const wordList = document
      .map((word: string): string => {
        return word.trim();
      })
      .filter((word: String) => word.length >= 3);

    //Delete [ا] جدااااا => جدا
    const normlalizedWordList = wordList.map((word: string): string => {
      return word
        .replace(/ا{2,}/gm, "ا")
        .replace(/ه{3,}/gm, "ه")
        .replace(/ي{2,}/gm, "ي")
        .replace(/ب{3,}/gm, "ب")
        .replace(/ل{3,}/gm, "ل")
        .replace(/ن{2,}/gm, "ن")
        .replace(/ت{3,}/gm, "ت")
        .replace(/م{3,}/gm, "م")
        .replace(/ك{2,}/gm, "ك")
        .replace(/ط{2,}/gm, "ط")
        .replace(/د{2,}/gm, "د")
        .replace(/ج{2,}/gm, "ج")
        .replace(/ح{2,}/gm, "ح")
        .replace(/خ{2,}/gm, "خ")
        .replace(/غ{2,}/gm, "غ")
        .replace(/ف{2,}/gm, "ف")
        .replace(/ق{2,}/gm, "ق")
        .replace(/ث{2,}/gm, "ث")
        .replace(/ص{2,}/gm, "ص")
        .replace(/ش{2,}/gm, "ش")
        .replace(/س{2,}/gm, "س")
        .replace(/ر{2,}/gm, "ر")
        .replace(/لا{2,}/gm, "لا")
        .replace(/ى{2,}/gm, "ى")
        .replace(/ة{2,}/gm, "ة")
        .replace(/و{2,}/gm, "و")
        .replace(/ز{2,}/gm, "ز")
        .replace(/ظ{2,}/gm, "ظ");
    });

    return normlalizedWordList;
  }

  public fullCleanUp(text: string[]): string[] {
    const removeEmojis = this.removeEmojis(text);
    const removeNumbersAndChars = this.removeChars(removeEmojis);
    const fullCleanedText = this.deepCleaner(removeNumbersAndChars);
    const normalizedText = this.normalizor(fullCleanedText);
    return normalizedText;
  }
}