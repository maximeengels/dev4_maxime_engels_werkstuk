
fetch('data/entries.json')
  .then(response => response.json())
  .then(data => console.log(data.items));



  // fetch(apiUrl+'/items', settings)
//   .then(res => res.json())
//   .then((json) => {
//     console.log(`Got the response, there are ${json.items.length} entries`)
//   });