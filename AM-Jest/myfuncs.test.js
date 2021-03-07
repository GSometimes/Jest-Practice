const myFunc = require('./myfuncs')

describe('test myFunc', () => {
    test('function returns arr', () => {
        expect(myFunc([1, 2])).toEqual([1, 2])
        expect(myFunc([3, 2])).toEqual([3, 2])
        expect(myFunc([5, 2])).toEqual([5, 2])
    } )

    test('function says oops if arr empty', () => {
        expect(myFunc([])).toEqual('oops')
    })
})