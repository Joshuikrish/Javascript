class StringUtils {
  static reverseString(str) {
    return str.split('').reverse().join('');
  }

  static countVowels(str) {
    return str.toLowerCase().replace(/[^aeiou]/g, '').length;
  }
}

console.log(StringUtils.reverseString('hello')); // Output: olleh
console.log(StringUtils.countVowels('javascript')); // Output: 3