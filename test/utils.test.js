// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('testing string fuction', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="states"><h3>Oregon</h3><ul><li>Flower: Oregon-grape</li><li>Animal: American beaver</li><li>Fruit: Pear</li><li>Tree: Douglas-fir</li</ul></div>;';
    
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
    expect.equal(actual, expected);
});
