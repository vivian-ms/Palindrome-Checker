function palindrome(string) {
  // 1) Remove non-alphanumeric characters
  // 2) Turn all letters to lowercase
  let array = [...string].filter( (str) => /[a-zA-Z0-9]/.test(str) ).map( (str) => str.toLowerCase() );

  // array.reverse() changes original array so make a copy of original array
  let array_copy = [...array];

  array.reverse();

  if (array.join('') == array_copy.join('')) {
    return true;
  } else {
    return false;
  }
}
