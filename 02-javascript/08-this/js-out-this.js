class Person {
  constructor(name) {
    this.name = name;
  }
};

function greet(postfix) {
  console.log(`Hi, I'm ${this.name}${postfix}`);
}

const minky = new Person('Momo');
greet.call(minky, '!');

const boundGreet = greet.bind(minky);
boundGreet('!');

minky.greet = greet;
minky.greet('!');
