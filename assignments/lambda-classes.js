// CODE here for your Lambda Classes

// PERSON CLASS

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

// INSTRUCTOR CLASS

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today, we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

// STUDENT CLASS

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

// PROJECT MANAGER CLASS

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// TESTS

// Objects

const fred = new Person({
  name: "Fred",
  age: 37,
  location: "Bedrock"
});

const alex = new Instructor({
  name: "Alex",
  age: 32,
  location: "London",
  favLanguage: "JavaScript",
  catchPhrase: "royalBlue",
  specialty: "Front-End Engineering"
});

const joe = new Student({
  name: "Joe",
  age: 28,
  location: "Dublin",
  previousBackground: "Ninja",
  className: "WEBEU4",
  favSubjects: ["React", "Expressjs", "DOM"]
});

const zach = new ProjectManager({
  name: "Zach",
  age: 30,
  location: "Madrid",
  favLanguage: "python",
  catchPhrase: "Go get it",
  specialty: "Back-End Engineering",
  gradClassName: "WEBEU2",
  favInstructor: "Gabriel"
});

const student = {
  name: "Dan",
  age: "27",
  location: "Amsterdam"
};

// LOGS

console.log(alex);
console.log(alex.demo('JavaScript III'));
console.log(alex.grade(student, 'CSS'));

console.log(joe);
// joe.listsSubjects();
console.log(joe.listsSubjects());
console.log(joe.PRAssignment('Javascript III'));
console.log(joe.sprintChallenge('Javascript Basics'));

console.log(zach);
console.log(zach.standUp('WEBEU4_Zach'));
console.log(zach.debugsCode(student, 'React'));
