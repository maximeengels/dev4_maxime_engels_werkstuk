(async function () {

  const searchcards = document.querySelector('.search-container');
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.getElementById('cards');

  let query;
  let arrayItems;
  let filterArray;
  let entries;
// fetches json file and activates function which passes entries through
  await fetch('data/entries.json')
    .then(response => response.json())
    .then((data) => {
      entries = data.items;
      addCards(entries);
    });

// function adds item cards to the page using array parameter
  async function addCards(data) {
    data.map(item => {
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
      )
    });
  }

// key-up event triggers when typing in search bar
  document.getElementById('search').onkeyup = async function () {
    query = this.value;
    await addSearchCards();
  }

// function adds cards that match typed search query
  function addSearchCards() {
    if (query !== "") {
      searchcards.innerHTML = "";
      arrayItems = entries.filter(filterQuery);
      arrayItems.map(item => {
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
        )
      });
    } else {
      searchcards.innerHTML = "";
    }
    if (arrayItems.length === 0 && query.length !== 0) {
      searchcards.innerHTML = "";
      searchcards.insertAdjacentHTML('afterbegin',
      `<div class="search-card-container">
      <h2>Geen resultaten voor "${query}".</h2>
      </div>`);
    }
  }

// filters search query
  function filterQuery(item) {
    //regex checks if query matches item name, item name has to 
    //start with query letter and looks at global and case insensitive flags
    const regex = new RegExp(`^${query}`, 'gi');
    return item.name.match(regex);
  }
// filters undefined data from json file
  function filterEmptyData(data) {
    if (data == undefined) {
      return "<br>";
    } else {
      return data;
    }
  }

// filters genre per item in array using item and filterArray in parameters
  const filterGenre = (tag, filterArray) => {
    for (item of filterArray) {
      if (tag['genre-v2'] == item.id) {
        return true;
      }
    }
  }

// filters category per item in array using item and filterArray in parameters
  const filterCategory = (tag, filterArray) => {
    for (item of filterArray) {
      if (tag['category'] == item.id) {
        return true;
      }
    }
  }

// toggles active class of filter buttons and passes array if all active ones
  for (button of filters) {
    button.onclick = function () {
      this.classList.toggle("active");
      const activeFilters = document.querySelectorAll('.active');
      tagFilter(activeFilters);
    }
  }

// filters entries using if else statements and .filter()
// which activates functions that check which tags are active
  const tagFilter = (activeFilters) => {
    filterArray = [];
    let genreArray = entries.filter(item => filterGenre(item, activeFilters));
    let categoryArray = entries.filter(item => filterCategory(item, activeFilters));

    for (filterName of activeFilters) {
      filterArray.push(filterName.id);
    }

    cards.innerHTML = '';

    if (filterArray == '') {
      addCards(entries);
    } else if (genreArray == '') {
      addCards(categoryArray);
    } else if (categoryArray == '') {
      addCards(genreArray);
    } else {
      addCards(genreArray.filter(item => filterCategory(item, activeFilters)));
    }
  }

})();