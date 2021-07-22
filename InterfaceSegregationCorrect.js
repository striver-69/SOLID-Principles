// we use small components and the functionality of small components to classes
//Each of our obje cts and classes only ever implements the information taht it can actually use and nothing extra that it cannot use.

class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attcked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover); //prototype is the difination of the class
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);
