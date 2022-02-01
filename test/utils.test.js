// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderLaCroix, renderState, renderPizza } from '../utils.js';

const test = QUnit.test;

test('testing la croix flavors function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="la-croix-flavors"><p>LimonCello</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLaCroix(['LimonCello']);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('testing state function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="states"><h3>Oregon</h3><ul><li>Flower: Oregon-grape</li><li>Animal: American beaver</li><li>Fruit: Pear</li><li>Tree: Douglas-fir</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderState({
        name: 'Oregon',
        animal: 'American beaver',
        flower: 'Oregon-grape',
        Fruit: 'Pear',
        Tree: 'Douglas-fir',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('testing pizza function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="pizzas"><h3>Meat Lovers</h3><p>Meat Lovers pizza has marinara sauce and shredded cheese, pepperoni, italian sausage, ham, and bacon toppings.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPizza({
        name: 'Meat Lovers', 
        sauce: 'marinara',
        toppings: ['shredded cheese', 'pepperoni', 'italian sausage', 'ham', 'bacon'],
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
