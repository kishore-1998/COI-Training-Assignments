const task3Element = document.getElementById('task-3');

// Task-1:function with no parameters
function greet1(){
    alert('Welcome...!!!->function with no parameter');
}
// Task-1:function with one parameter
function greet2(name){
    alert(`Welcome ${name}...!!!->function with parameter`);
}

// Task-2:function calling directly
greet1();
greet2("Ram");

// Task-3:Adding event listener to greet1 function
task3Element.addEventListener('click',greet1);

// Task-4:new function with 3 parameters with return value
function dateOfBirth(date,month,year) {
    const dob = date + '/' + month + ' /' + year;
    return dob;
    
}

// Task-5:calling dateOfBirth function
const dob = dateOfBirth(30,10,1998);
alert(dob);
