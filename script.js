$(function() {
  $('form').on('submit', function(evt) {
    evt.preventDefault();
    palindrome( $('input').val() );
  });

  $('#clear').on('click', function(evt) {
    $('#result').empty();
    $('input').focus();
  });
});


function palindrome(string) {
  // 1) Remove non-alphanumeric characters
  // 2) Turn all letters to lowercase
  let array = [...string].filter( (str) => /[a-zA-Z0-9]/.test(str) ).map( (str) => str.toLowerCase() );

  // array.reverse() changes original array so make a copy of original array
  let array_copy = [...array];

  array.reverse();

  if (array.join('') == array_copy.join('')) {
    $('#result').append(`<li><b>${string}</b> is a palindrome</li>`);
  } else {
    $('#result').append(`<li><b>${string}</b> is not a palindrome</li>`);
  }

  $('input').val('');
}
