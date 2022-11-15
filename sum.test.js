const { default: test } = require('node:test');
const sum = require('./sum');

test('returns entire given string capitalized', () => {
    expect(capitalize('joseph')).toBe('JOSEPH');
});

test('reverses string from backwards to forwards', () => {
    expect(reverseString('joseph').toBe('hpesoj'));

});

test('Completes all mathematical procedures correctly with 2 numbers', () => {

    expect(calculator(1,2).add().toBe(3));
    expect(calculator(3,2).subtract().toBe(1));
    expect(calculator(4,2).divide().toBe(2));
    expect(calculator(2,2).multiply().toBe(4));


})
