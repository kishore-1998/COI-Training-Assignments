const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// Task-1:checking the generated randomNumber is greater than 0.7 or Not
if (randomNumber > 0.7) {
  alert('Greater than 0.7');
} else {
  alert('Not Greater!');
}

// Task-2:creating array
const numbers = [1, 2, 3, 4];
// Task-2: looping array->method 1
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Task-2:looping array->method 2
for (const num of numbers) {
  console.log(num);
}

// Task-2:looping array->method 3
let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

// Task-3:inverse looping array
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// Task-4:
const randomNumber2 = Math.random();
console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Greater than 0.7 or Smaller than 0.2.');
}
