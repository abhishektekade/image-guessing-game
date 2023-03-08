// Define an array of words with keys
const imgEl = document.getElementById('random-image');


const keyValues = {
    'react':'download (1).png',
    'vue': 'download.png',
    'angular': 'download (2).png'
};


// Get a random key from the object
const randomKey = Object.keys(keyValues)[Math.floor(Math.random() * Object.keys(keyValues).length)];

let correctAnswers = 0;
let totalQuestions = 0;


// Display the random image
const img = document.createElement("img");
img.src = keyValues[randomKey];
document.body.appendChild(img);

function myFunction() {
    var input1 = document.getElementById("myText").value;
    return input1;
  }
const guess = myFunction();
const inp = document.createElement("inp");
img.src = keyValues[randomKey];
document.body.appendChild(img);
// Prompt the user to guess the key
// const guess = prompt("What is the key for this image?");

// Check if the guess is correct and display the score
if (guess === randomKey) {
  correctAnswers +=1;
  console.log(correctAnswers);
} else {
    console.log(randomKey);
//   alert(`Sorry, the correct answer is "${randomKey}". You earned 0 points.`);
}










// // Loop through the fruits object and ask a random question
// for (const fruit in fruits) {
//   if (fruits.hasOwnProperty(fruit)) {
//     const definition = fruits[fruit];

//     // Choose a random fruit from the object
//     const randomFruit = Object.keys(fruits)[Math.floor(Math.random() * Object.keys(fruits).length)];

//     // Print out the definition of the random fruit

//     console.log('Definition: ' + definition);

//     // Get user input to guess the fruit
//     const guess = prompt('Guess the fruit: ');

//     // Check if the guess is correct
//     if (guess.toLowerCase() === randomFruit) {
//       console.log('Correct! The fruit was ' + randomFruit);
//       correctAnswers++;
//     } else {
//         console.log('Sorry, the correct answer was ' + randomFruit);
// }
// totalQuestions++;
// }
// }

// // Print out the final score
// console.log('You scored ' + correctAnswers + ' out of ' + totalQuestions);




























//     { key: 'vue', value: '' },
//     { key: 'react', value: '' },
//     { key: 'angular', value: '' }
//   ;
  



// imgEl.addEventListener('click', () => {
//     window.location.reload();
//     // Refreshes page when image clicked
// });

// randomImage();

// function randomImage() {

//     const randomIndex = Math.floor(Math.random()*srcArray.length);

//     if (localStorage.getItem('currentIndex') !== String(randomIndex)) {
//     // Checks if current index in local storage is NOT equal to new randm value (as string)...
        
//         imgEl.src = srcArray[randomIndex];
//         //...if so, set random value as new image src...

//         localStorage.setItem('currentIndex', randomIndex);
//         //...and save as current index value in local storage

//     } else {
//       // random value and current index value match...

//         randomImage();
//         // ... so call random image function again

//     }
// }


// //   // Choose a random word from the array
// //   const randomWord = words[Math.floor(Math.random() * words.length)];
  
// //   // Print out the definition of the random word
// //   console.log('Definition: ' + randomWord.value);
  
// //   // Get user input to guess the word
// //   const guess = prompt('Guess the word:');
  
// //   // Check if the guess is correct
// //   if (guess === randomWord.key) {
// //     console.log('Congratulations, you guessed the word!');
// //   } else {
// //     console.log('Sorry, that\'s not the correct word. The word was ' + randomWord.key + '.');
// //   }
  