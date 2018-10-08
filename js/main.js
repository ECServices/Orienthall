let string = "I love javascript";

longestWord(string);

function longestWord(sentence) {

  let arr = sentence.split(" ");

  let length = 0;
  let longest;

  for(let i = 0 ; i < arr.length; i++) {
    if(arr[i].length > length) {
      length = arr[i].length;
      longest = arr[i];
    }
  }
  console.log(longest);
}


reverseString(string);

function reverseString(string) {
  let emptyArr = [];
  var arr = string.split("");
  console.log(arr.length);
  for(i = arr.length; i >= 0; i--)
  emptyArr.push(arr[i]);
  console.log(emptyArr.join(''));

  console.log(emptyArr);
}


function join(arr, delimiter) {
  for (var i = 0; i < arr.length; i+=1) {

  }
}

stringTest(string);

function stringTest(string) {
  console.log(string.substring(1, 3));
}


// Övning 1
helloX("Mohammed");

function helloX(x) {
  console.log("Hello" + x);
}


function createHalfPyramid(height) {

  for (i = 0 ; i <= height; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += "#";
    }
    console.log(row);
  }
}

createHalfPyramid(5);

checkPalindrom("racecar");

function checkPalindrom(word) {
  let lowerCase = word.toLowerCase();
  let splitWord = lowerCase.split("");
  let reverse = splitWord.reverse();

  let joinWords = reverse.join("");

  console.log(lowerCase);
  console.log(splitWord);
  console.log(reverse);
  console.log(joinWords);

  if(lowerCase === joinWords) {
    console.log("Your word is a palindrom");
  } else {
    console.log("Your word is not a palindrom");
  }
}

wordCount("Test Yi Di");

function wordCount(word) {
  let wordLength = word.split(" ");
  console.log("The total words in your input is " + wordLength.length);
}

minNumb(1,2);

function minNumb(x, y) {
  if(x < y) {
    console.log("The minimum numer is " + x);
  } else {
    console.log("The minimum numer is " + y);
  }

}

let values = [-3, 1, 2, 3, 4, -5];

array(values);

function array(input) {
  // console.log(Math.min.apply(Math, input));
  let length = input.length;
  let min = Infinity;
  while (length--) {
    if (input[length] < min) {
      min = input[length];
    }
  }
  console.log(min);
};
