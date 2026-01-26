import fetch from 'node-fetch';

const getUser = (userID) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} Error`);
      } else {
        return response.json();
      }
    },
  );

console.log('--- Start ---');

getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('--- Completed ---');
  });
