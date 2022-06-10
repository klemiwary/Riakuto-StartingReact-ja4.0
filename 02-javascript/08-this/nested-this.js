class Person {
  constructor(name) {
    this.name = name;
  }

  greet () {
    function doIt() {
      console.log(`Hi, I'm ${this.name}`);
    }
    doIt();
  }
}

const minky = new Person('Momo');
minky.greet();
