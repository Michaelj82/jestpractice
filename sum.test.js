// const capitalize = require('./sum');
let myModule = require('./sum');


test('returns entire given string capitalized', () => {
    let solution = myModule.capitalize('joseph');
    expect(solution).toBe('JOSEPH');
});

test('reverses string from backwards to forwards', () => {
    let answer = myModule.reverseString('lamp')
    expect(answer).toBe('pmal');

});

test('Completes all mathematical procedures correctly with 2 numbers', () => {

    expect(myModule.calculator(1,2).add()).toBe(3);
    expect(myModule.calculator(3,2).subtract()).toBe(1);
    expect(myModule.calculator(4,2).divide()).toBe(2);
    expect(myModule.calculator(2,2).multiply()).toBe(4);


})

test('Does Caesar Cipher correctly, shifting all letters -1', () => {

    expect(myModule.caesarCipher('zebra')).toBe('afcsb')

})

test('Returns function from list of numbers with correct average, min, max, and length', () => {
    let object = myModule.analyzeArray([1,8,3,4,2,6]);
    expect((object.average)).toBe(4)
    expect((object.min)).toBe(1)
    expect((object.max)).toBe(8)
    expect((object.length)).toBe(6)


})