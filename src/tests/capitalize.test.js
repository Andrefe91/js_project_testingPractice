const capitalize = require('../scripts/capitalize');

test('Capitalize a simple word', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('water')).toBe('Water');
    expect(capitalize('earth')).toBe('Earth');
});

test('Capitalize two words', () => {
    expect('two words').toBe('Two Words');
    expect('one earth').toBe('One Earth');
});

test('Capitalize n number of words', () => {
    expect('this is nothing').toBe('This Is Nothing');
    expect('something really large for a title').toBe('Something Really Large For A Title');
});
