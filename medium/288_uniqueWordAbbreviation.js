/**
 * 288. Unique Word Abbreviation
 */
class ValidWordAbbr {
  constructor(dict) {
    this.dict = this._transform(dict);
    console.log(this.dict)
  }

  _transform(dict) {
    const dic = {};

    dict.forEach(word => {
      if (!word) {
        return;
      }

      const abbreviated = this._abbr(word);

      if (dic[abbreviated] && dic[abbreviated] !== word) {
        dic[abbreviated] = false;
      } else {
        dic[abbreviated] = word;
      }

    })

    return dic;
  }

  _abbr(word) {
    if (word.length <= 2) {
      return word;
    }

    return `${word[0]}${word.length-2}${word[word.length-1]}`;
  }

  isUnique(word) {
    const abbreviated = this._abbr(word);

    if (abbreviated in this.dict) {
      const w = this.dict[abbreviated];
      if (!w) {
        return false;
      }

      return w === word;
    } else {
      return true;
    }
  }
}
