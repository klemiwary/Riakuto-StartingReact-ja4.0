class Person {
  constructor(name) {
    this.name = name;
  }
};

function greet(eos) {
  console.log(`Hi, I'm ${this.name}${eos}`);
}

const minky = new Person('Momo');
greet.call(minky, '!');

const boundGreet = greet.bind(minky);
boundGreet('!');

minky.greet = greet;
minky.greet('!');
