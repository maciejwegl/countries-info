import { renderCountriesList } from "./utils.js";
// import { filterAndRenderData } from "./filter.js";

console.log("Dupa dupa");

let countries;
let filteredCountries;
let query = "";
let region = "";

export { query, region, countries };

const inputFilter = document.getElementById("input-filter");
const regionFilter = document.getElementById("region-select");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countriesData) => {
    countries = countriesData.map((country) => {
      return {
        name: country.name.common,
        capital: country.capital,
        region: country.region,
        flagUrl: country.flags.png,
        population: country.population,
      };
    });

    renderCountriesList(countries);
  })
  .catch((error) => console.error(error));

const filterAndRenderData = () => {
  filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query) &&
      (!region || country.region === region)
    );
  });

  renderCountriesList(filteredCountries);
};

inputFilter.addEventListener("input", (e) => {
  query = e.target.value.toLowerCase().trim();

  filterAndRenderData();
});

regionFilter.addEventListener("change", (e) => {
  region = e.target.value;

  filterAndRenderData();
});
