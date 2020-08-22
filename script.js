
fetch('data/entries.json')
  .then(response => response.json())
  .then(data => {
    const cards = document.getElementById('cards');
    console.log(data.items);
    data.items.map( item => {
    cards.insertAdjacentHTML('afterbegin', 
      `<div class="card-container" id="${item.category}">
        <a href="/" class="video-card">
          <div class="video-card-img">
            <img src="${item.thumbnail.url}" alt="">
            <div class="inner">  
              <div class="video-card-img-tag">
                <span class="tagline">${item['genre-v2']}</span>
              </div>
            </div>
          </div>
          <div class="video-card-content">
            <h3 class="name">${item.name}</h3>
            <span class="discription company">${item.excerpt}</span>
            <span class="discription location">${item['recorded-at']}</span>
            <span class="duration">${item['video-length']}</span>
          </div>
        </a>
      </div>`
      )}
    );
  });

  function filterCategory(cat) {
    console.log(cat);
    // if(cat != ){

    // }
  }

  // fetch(apiUrl+'/items', settings)
//   .then(res => res.json())
//   .then((json) => {
//     console.log(`Got the response, there are ${json.items.length} entries`)
//   });