class Course {
  // Task-5:
  #price;

  // Task-4:
  get price() {
    return '$' + this.#price;
  }
  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  // Task-1:
  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  // Task-2:
  calculateValue() {
    return this.length / this.#price;
  }

  // Task-2:
  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

// Task-1:
const course1 = new Course('JavaScript', 50, 44);
const course2 = new Course('NodeJs', 50, 36);
console.log(course1);
console.log(course2);

// Task-2:
console.log(course1.calculateValue());
console.log(course2.calculateValue());
course1.printSummary();
course2.printSummary();

// Task-3:
class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length);
    this.numOfExercises = exercisesCount;
  }
}

const course3 = new PracticalCourse(
  'Angular',
  36,
  50,
  10
);

console.log(course3);
course3.printSummary();

// Task-3:
class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing........');
  }
}

const course4 = new TheoreticalCourse(
  'TypeScript',
  50,
  48
);

  course4.price = 3000;
//course4.#price = 300;

course4.printSummary();
course4.publish();