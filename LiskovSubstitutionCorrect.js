//Duck class is passing the Liskov Substitution principle but the penguin class doesn't

// class Bird {
//   fly() {
//     console.log('I can Fly');
//   }
// }

// class Duck extends Bird {
//   quack() {
//     console.log('I can quack');
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error('Cannot Fly');
//   }
//   swim() {
//     console.log('I can swim');
//   }
// }

// function makeBirdfly(bird) {
//   bird.fly();
// }

// makeBirdfly(duck);
// makeBirdfly(penguin);

// -------------------------------- Correct Implementation -----------

class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
