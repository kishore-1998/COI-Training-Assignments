// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// Task-1:rewriting above function into arrow function
const sayHello = name => console.log('Hi ' + name);

// Task-2:function with 2 arguments,0 arguments and return
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Ram');
const sayHello4 = name => 'Hi ' + name;

sayHello('Raj');
sayHello2('Ravi', 'Hi');
sayHello3();
console.log(sayHello4('Roja'));

// Task-3:function with default argument
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Krish');
sayHello5('Krish', 'Hello');

//Task-4:unlimited amount of aruguments
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('String argument is not empty!');
  },
  'string1',
  'string2',
  'string3',
  'string4'
);
