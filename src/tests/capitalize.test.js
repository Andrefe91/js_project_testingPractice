const capitalize = require('../scripts/capitalize');

test('Capitalize a simple word', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('water')).toBe('Water');
    expect(capitalize('earth')).toBe('Earth');
});

test('Capitalize two words', () => {
    expect(capitalize('two words')).toEqual('Two Words');
    expect(capitalize('one earth')).toBe('One Earth');
});

test('Capitalize n number of words', () => {
    expect(capitalize('this is nothing')).toBe('This Is Nothing');
    expect(capitalize('something really large for a title')).toBe('Something Really Large For A Title');
});

test('Edge case: Many spaces between words', () => {
    expect(capitalize('   many   spaces   between   words')).toBe('Many Spaces Between Words');
    expect(capitalize('      leading    spaces')).toBe('Leading Spaces');
    expect(capitalize('trailing    spaces   ')).toBe('Trailing Spaces');
});
