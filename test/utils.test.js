// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderLaCroix, renderState, renderPizza, renderCountries } from '../utils.js';

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

test('testing countries function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="countries"><img src="icons8-australia-96.png"><h3>Australia Facts</h3><ul><li>Population: 25.69 million</li><li>Capital: Canberra</li><li>Fun Fact: If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.</li></ul></div>';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCountries({
        name: 'Australia',
        img: 'icons8-australia-96.png',
        facts: {
            population: '25.69 million',
            capital: 'Canberra',
            fact: 'If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.',
        },
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
