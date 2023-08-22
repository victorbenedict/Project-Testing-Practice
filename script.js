const cl = console.log

function capitalize(str) {
  return `${str.slice(0,1).toUpperCase()}${str.slice(1)}`
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

const calculator = {
    add: function(a,b) {
      return a + b
    },
    subract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b
    },
}



function caesarCipher(str, shift) {

  const newArr = []
  const newShift = shift > 26 ? shift % 26 : shift

  const convertAlphabetToCipher = (char, baseUnicode) => {
    const charCode = char.charCodeAt(0) - baseUnicode + newShift
    const modCharcode = charCode > 26 ? charCode - 26 : charCode
    return String.fromCharCode(modCharcode + baseUnicode)
  }

  str.split('').forEach(char => {
    if (/^[A-Z]$/.test(char)){
      newArr.push(convertAlphabetToCipher(char, 64))
    } else if (/^[a-z]$/.test(char)) {
      newArr.push(convertAlphabetToCipher(char, 96))
    } else {
      newArr.push(char)
    }
  });

  return newArr.join('')
}

function analyzeArray(arr) {
  let total = 0
    arr.forEach(num => {
      total += num
  })

  return {
    average: total / arr.length,
    min: arr.length > 0 ?  Math.min(...arr) : undefined,
    max: arr.length > 0 ? Math.max(...arr) : undefined,
    length: arr.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};

