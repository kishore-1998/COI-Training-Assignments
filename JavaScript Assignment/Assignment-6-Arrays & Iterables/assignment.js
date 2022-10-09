 // Task-1:
 const numbers = [1,2,5,6,10];

const numsGreater5 = numbers.filter(value => value > 5);//filter
console.log(numsGreater5);

const mappedNumbers = numbers.map(value => ({ num: value }));//map
console.log(mappedNumbers);

const multiplication = numbers.reduce(                 //reduce
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

// Task-2:
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

// Task-3:
function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

// Task-4:
// in set() method duplicate values can't be added
const list = new Set();
list.add(5);
list.add(1);
list.add(5);

console.log(list);