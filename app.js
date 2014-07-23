var opposite = function (brace) {
  switch (brace) {
  case '{':
    return '}';
    break;
  case '[':
    return ']';
    break;
  case ']':
    return '[';
    break;
  case '}':
    return '{';
    break;
  default:
    return null;
    break;
  }
};

module.exports = {
  /**
   * A simple app that checks a string for brace equality
   * and returns "true" or "false" based on the validity.
   *
   * @param {String|Array} braces
   */
  braceChecker: function (braces) {
    //strip all characters except braces, then make it an array
    if (typeof braces === 'string') {
      braces = braces.replace(/[^\[\{\]\}]/gi, '');
      braces = braces.split('');
    }

    // if it's an odd number of braces, it's automatically invalid
    // as braces should always come in pairs
    if (braces.length % 2 !== 0) {
      return false;
    }

    // if there are no braces, we assume it's valid
    if (braces.length === 0) {
      return true;
    }

    getBraceIndex = function (braces) {
      var curly = braces.lastIndexOf('{');
      var straight = braces.lastIndexOf('[');
      if (curly > straight) {
        return curly;
      }
      else {
        return straight;
      }
    };

    // get the index of the first brace
    var index = getBraceIndex(braces);

    // get the first brace, and its counterpart, starting
    // from right to left
    var first = braces[index];
    var next = braces[index + 1];

    // if "next" is the opposite brace, these two are
    // valid, and we remove the braces from the array
    if (next === opposite(first)) {
      braces.splice(getBraceIndex(braces), 2);
    }
    else {
      return false;
    }

    // if there are no more braces, the string is valid,
    // otherwise run the function again with the new array
    if (braces.length > 0) {
      return module.exports.braceChecker(braces);
    }
    else {
      return true;
    }
  },
  /**
   * Simple app to check if two strings are anagrams of each
   * other.
   *
   * @param {String} source
   * @param {String} target
   */
  anagramChecker: function (source, target) {
    var isAnagram = false;

    if (source.length !== target.length) {
      return isAnagram;
    }

    //split words into arrays
    source = source.split('');
    target = target.split('');

    source.forEach(function (letter) {
      if (target.indexOf(letter) >= 0) {
        //remove it from target array
        target.splice(target.indexOf(letter), 1);
      }
    });

    if (target.length === 0) {
      isAnagram = true;
    }

    return isAnagram;

  }
};