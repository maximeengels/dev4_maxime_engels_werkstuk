
let query;

fetch('data/entries.json')
  .then(response => response.json())
  .then(data => {
    const cards = document.getElementById('cards');
    data.items.map( item => {
    cards.insertAdjacentHTML('afterbegin', 
      `<div class="card-container ${item.category}">
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
            <span class="discription location">${filterEmptyData(item['recorded-at'])}</span>
            <span class="duration">${filterEmptyData(item['video-length'])}</span>
          </div>
        </a>
      </div>`
    )}
  );
});


document.getElementById('search').onkeyup = function(){
  query = this.value;
  console.log(query);
  
  addSearchCards();
};

function addSearchCards() {
  fetch('data/entries.json')
  .then(response => response.json())
  .then(data => {
    const searchcards = document.querySelector('.search-container');
    data.items.filter(filterQuery).map( item => {
      searchcards.insertAdjacentHTML('beforeend', 
      `<div class="card-container ${item.category}">
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
            <span class="discription location">${filterEmptyData(item['recorded-at'])}</span>
            <span class="duration">${filterEmptyData(item['video-length'])}</span>
          </div>
        </a>
      </div>`
      )}
    );
  });
}

function filterQuery(item){
  if ('name' in item && item.name == query) {
    return true;
  } else {
    return false;
  }
}

function filterEmptyData(data){
  if(data == undefined){
    return "<br>";
  } else{
    return data;
  }
}

function clickEvent(id){
  let value = document.getElementById(id).value;
  document.getElementById(id).classList.toggle("active");
  console.log(value);
  document.querySelectorAll('.familie').style.display = "none";
}


  document.querySelector('button').onclick = function () {
    clickEvent(this.id);
    // this.classList.toggle("active");
    // document.querySelector('.familie').style.display = "none";
}

//   document.querySelector('.fam').onclick = function () {
//     this.classList.toggle("active");
//     document.querySelector('.volwassenen').style.display = "none";
// }