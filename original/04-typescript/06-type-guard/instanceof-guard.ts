class Base { common = 'common'; }
class Foo extends Base { foo = () => { console.log('foo'); } }
class Bar extends Base { bar = () => { console.log('bar'); } }

const doDivide = (arg: Foo | Bar) => {
  if (arg instanceof Foo) {
    arg.foo();
//  arg.bar();
  } else {
    arg.bar();
//  arg.foo();
  }

  console.log(arg.common);
};

doDivide(new Foo());
doDivide(new Bar());
