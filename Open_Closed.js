class Datatype {
  constructor(description, samples = [], Name = '') {
    this.description = description;
    this.samples = samples;
    this.name = Name;
  }
  printSamples() {
    if (this.samples.length) {
      console.log(this.samples);
    } else {
      console.log(`No sample value provided for datatype ${this.name}`);
    }
  }
  printName() {
    console.log(this.name);
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printSamples();
    question.printName();
  });
}

const questions = [
  new Datatype('This is the array data structure', [], 'Array'),
  new Datatype(
    'This is the hash map data structure',
    [{ a: 'b' }, { b: 'c' }],
    'hash map'
  ),
];

printQuiz(questions);
