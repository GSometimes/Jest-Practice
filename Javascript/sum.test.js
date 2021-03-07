// The .test.js file is where you'll be testing your code to ensure
// that it was written and runs properly.

// Import 'sum function

const { expect } = require('@jest/globals')
const sum = require('./sum')

test('properly adds two numbers', () =>{
    expect(sum(1, 2)).toBe(3) // In a .test.js file 'expect' is the equivalent of an 'if' statement.
})

