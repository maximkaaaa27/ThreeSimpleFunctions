function ucFirst(str) {
  let FirstChar;
  if (str === '') {
      return str;
  } else {
    FirstChar = str[0];
    let sliceStr = str.slice(1);
    let CharterUp = FirstChar.toUpperCase();
    str = CharterUp + sliceStr;
    return str;
  }
}
