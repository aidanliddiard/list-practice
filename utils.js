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

    div.append(h3, ul, liFlower, liAnimal, liFruit, liTree);
    return div;
}