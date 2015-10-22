var igpayAtinlay = function(input) {
  var inputArray = input.split('');
  var newWord;
  if ('aeiou'.indexOf(input[0]) !== -1) {
    return input.concat("ay");
  } else {
      for (var i=0; i<=inputArray.length; i++){
        if ('aeiou'.indexOf(inputArray[0]) === -1) {
          inputArray.shift();
          inputArray.push(input[i]);
        } else {
            newWord = inputArray.join('');
            newWord = newWord.concat('ay');
            return newWord;
          }
      }
    }
}
