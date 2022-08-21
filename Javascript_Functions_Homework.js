// Function 1
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    // return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

// Function 2
function maxOfThreeNumbers(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else z >= x && z >= y;
  return z;
}

console.log(maxOfThreeNumbers(3, 6, 9));

// Function 3
function isCharAVowel(char) {
  let vowel = ["a", "e", "i", "o", "u", "y"];
  const found = vowel.find((x) => {
    return char === x;
  });
  if (found === undefined) {
    return false;
  } else {
    return true;
  }
}
//  isCharAVowel("f")

console.log(isCharAVowel("a"));

// Function 4 (Expression)
const getArray = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(getArray(2, 4, 5));

// Function 5 (Declaration)
function multiplyArray(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplyArray(2, 4, 5));

// Function 6

// Function 7
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("rockstar");
