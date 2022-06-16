interface CustomError<E = Error> {
  type: 'syntax' | 'logic' | 'runtime';
  error :E;
}

const tokenError: CustomError = {
  type: 'syntax',
  error: new Error('Unexpected Token'),
};

console.log(tokenError);
