export function renderLaCroix(array) {
    const div = document.createElement('div');
    div.classList.add('la-croix-flavors');

    const p = document.createElement('p');
    p.textContent = array;

    div.append(p);
    return div;
}

export function renderState(object) {
    const div = document.createElement('div');
    div.classList.add('states');
    const h3 = document.createElement('h3');
    h3.textContent = object.name;
    const ul = document.createElement('ul');
    //flower
    const liFlower = document.createElement('li');
    liFlower.textContent = `Flower: ${object.flower}`;
    //animal
    const liAnimal = document.createElement('li');
    liAnimal.textContent = `Animal: ${object.animal}`;
    //fruit
    const liFruit = document.createElement('li');
    liFruit.textContent = `Fruit: ${object.Fruit}`;
    //tree
    const liTree = document.createElement('li');
    liTree.textContent = `Tree: ${object.Tree}`;
    ul.append(liFlower, liAnimal, liFruit, liTree);
    div.append(h3, ul);
    return div;
}

export function renderPizza(type) {
    const div = document.createElement('div');
    div.classList.add('pizzas');
    const h3 = document.createElement('h3');
    h3.textContent = type.name;
    const p = document.createElement('p');

    const toppings = type.toppings;
    let output = '';

    for (var i = 0; i < toppings.length; i++) {
        if (i === 0) {
            output = `${toppings[i]}`;
        }
        else if (i === (toppings.length - 1)) {
            output = `${output}, and ${toppings[i]}`;
        }
        else {
            output = `${output}, ${toppings[i]}`;
        }
    }
    p.textContent = `${type.name} pizza has ${type.sauce} sauce and ${output} toppings.`;

    div.append(h3, p);
    return div;
}