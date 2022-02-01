import { laCroixFlavors } from './la-croix-data.js'; 
import { states } from './states-data.js';
import { pizzas } from './pizza-data.js';
import { renderLaCroix, renderState, renderPizza } from './utils.js';

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

const pizzaList = document.getElementById('pizzas');

for (let pizza of pizzas) {
    const div = renderPizza(pizza);
    pizzaList.append(div);
}