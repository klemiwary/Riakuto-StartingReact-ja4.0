type Animal = 'cat' | 'dog' | 'rabbit';
type AnimalNote = Record<Animal, string>;
// type AnimalNote = { [key in Animal]: string }

const animalKanji: AnimalNote = {
  cat: '猫',
  dog: '犬',
  rabbit: '兎',
};

console.log(animalKanji);
