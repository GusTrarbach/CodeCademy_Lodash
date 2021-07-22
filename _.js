const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (typeof start === 'undefined' || typeof end === 'undefined') {
      start = 0;
      end = start;
    }
    if (start > end) {
      let intermediate = end;
      end = start;
      start = intermediate;
    }
    return (number >= start && number < end);
  },
  words(str) {
    return str.split(' ');
  },
  pad(str, length) {
    totalPadding = length - str.length;
    if (totalPadding <= 0) {
      return str;
    } else if (totalPadding%2 != 0) {
      for (let i = 0; i < ((totalPadding - 1)/2); i++) {
        str = ' ' + str + ' ';
      }
      str+=' ';
      return str;
    }
    for (let i = 0; i < ((totalPadding - 1)/2); i++) {
      str = ' ' + str + ' ';
    }
    return str;
  },
  has(obj, key) {
    hasValue = obj[key] != undefined;
    return hasValue;
  },
  invert(object) {
    let newObject = {};
    for (let i in object) {
      originalValue = object[i];
      newObject.originalValue = i;
    }
    return newObject;
  }
};

// Do not write or modify code below this line.
module.exports = _;