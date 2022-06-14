fetch('https://swapi.dev/api/people/1')
  .then(res => res.json())
  .then(json => json.results)
  .then(console.log)
