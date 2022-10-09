// Task-1:method1
const docTask1Element1 = document.getElementById('task-1');
// Task-1:method2
const docTask1Element2 = document.querySelector('li');

docTask1Element1.style.color = 'white';//method1
docTask1Element2.style.backgroundColor = 'black';//method2

// Task-2:method1
const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'Assignment - Solved!';

// Task-2:method2
const docHead = document.head;
const docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Assignment - Solved!';

// Task-3:
// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';