const countriesList = document.getElementById("countries");

const listElement = document.createElement("ul");

let countryItem;

export const renderCountriesList = (countries) => {
  listElement.innerHTML = "";
  // countriesList.innerHTML = "";
  countriesList.appendChild(listElement);
  listElement.classList.add("countries-list");

  renderConutryItem(countries);
};

const renderConutryItem = (countries) => {
  countries.forEach((country) => {
    countryItem = document.createElement("li");
    listElement.appendChild(countryItem);
    countryItem.classList.add("country");
    countryItem.innerHTML = `
    <div class="country-content">
      <div class="img-holder" style="background-image: url(${country.flagUrl})"></div>
      <h3>${country.name}</h3>
      <div class="info-holder">
        <span>Population: ${country.population}</span>
        <span>Region: ${country.region}</span>
        <span>Capital: ${country.capital}</span>
      </div>
    </div>`;
  });
};
