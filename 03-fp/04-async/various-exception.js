class DoubleError extends Error {};
class TripleError extends Error {};
class QuintupleError extends Error {};

try {
  const num = Math.floor(Math.random() * 100);
  console.error(num);

  if (num % 2 === 0) {
    throw new DoubleError;
  } else if (num % 3 === 0) {
    throw new TripleError;
  } else if (num % 5 === 0) {
    throw new QuintupleError;
  } else {
    throw new Error;
  }
} catch (e) {
  if (e instanceof DoubleError) {
    console.error('Divisible by 2');
  } else if (e instanceof TripleError) {
    console.error('Divisible by 3');
  } else if (e instanceof QuintupleError) {
    console.error('Divisible by 5');
  } else {
    console.error('Not divisible by 2, 3, or 5');
  }
}
