class Formatter {
  static capitalize(string){
    return string.split("")[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-" "']+/g, '');
  }

  static titleize(string){
    let words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let strArr = string.split(" ");
    let finalString = [];

    strArr.map(function(word){
      if(words.includes(word) === false){
        finalString.push(Formatter.capitalize(word));
      } else {
        finalString.push(word);
      }
    })
    return Formatter.capitalize(finalString.join(" "));
  };

}
