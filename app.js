import { laCroixFlavors } from './la-croix-data.js'; 
import { states } from './states-data.js';
import { renderLaCroix, renderState } from './utils.js';

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