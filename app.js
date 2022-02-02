import { laCroixFlavors } from './la-croix-data.js'; 
import { states } from './states-data.js';
import { pizzas } from './pizza-data.js';
import { countries } from './country-data.js';
import { renderLaCroix, renderState, renderPizza, renderCountries } from './utils.js';

const laCroixList = document.getElementById('la-croix-flavors');
//console.log(laCroixFlavors);

for (let flavor of laCroixFlavors) {
    const div = renderLaCroix(flavor);
    laCroixList.append(div);
    //console.log(laCroixList);
}

const statesList = document.getElementById('states');

for (let state of states) {
    const div = renderState(state);
    statesList.append(div);
}

const countryList = document.getElementById('countries');

for (let country of countries) {
    const div = renderCountries(country);
    countryList.append(div);
}

const pizzaList = document.getElementById('pizzas');

for (let pizza of pizzas) {
    const div = renderPizza(pizza);
    pizzaList.append(div);
}