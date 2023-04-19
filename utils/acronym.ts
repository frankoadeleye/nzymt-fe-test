function acronym(text) {
  return text.split(/\s/).reduce(function (accumulator, word) {
    return accumulator + word.charAt(0);
  }, "");
}

export default acronym;
