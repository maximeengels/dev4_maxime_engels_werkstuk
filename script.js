(function() {

let query;
asyncCall();

async function asyncCall() {
  getData();
}

async function getData() {
  await fetch('data/entries.json')
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
}

document.getElementById('search').onkeyup = async function(){
  query = this.value;
  await addSearchCards();
};

function addSearchCards() {
  fetch('data/entries.json')
  .then(response => response.json())
  .then(data => {
    const searchcards = document.querySelector('.search-container');
    if(query !== ""){
      searchcards.innerHTML = "";
      let arrayItems = data.items.filter(filterQuery);
      arrayItems.map( item => {
        searchcards.insertAdjacentHTML('afterbegin', 
        `<div class="search-card-container">
          <a href="/" class="search-card video-card">
            <div class="search-video-card-img">
              <img src="${item.thumbnail.url}" alt="">
            </div>
            <div class="video-card-content">
              <h3 class="name">${item.name}</h3>
              <span class="discription company">${item.excerpt}</span>
            </div>
          </a>
        </div>`
        )}
      );
    } else {
      searchcards.innerHTML = "";
    }
  });
}

function filterQuery(item){
    //regex checks if 
    const regex = new RegExp(`^${query}`, 'gi');
    return item.name.match(regex);
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

document.querySelector('button').onclick = async function () {
  clickEvent(this.id);
}

})();