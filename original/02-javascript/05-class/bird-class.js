class Bird {
  #className = '鳥類';

  constructor(name) {
    this.name = name;
  }

  cry = (sound) => {
    console.log(`${this.name}が「${sound}」と鳴きました`);
  };

  introduce = () => {
    console.log(`私は${this.#className}の${this.name}です`);
  };

  static explain = () => {
    console.log('これは鳥のクラスです');
  };
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly = () => {
    console.log(`${this.name}が飛びました`);
  };
}

Bird.explain();

const penguin = new Bird("ペンギン");
penguin.introduce();

const hawk = new FlyableBird("タカ");
hawk.cry("ピィィー");
hawk.fly();
