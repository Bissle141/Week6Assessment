const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4,5,6]

describe('shuffleArray should', () => {
    test("return an array", () =>{
        expect(Array.isArray(shuffleArray(testArr))).toBeTruthy()
    })

    test("return an array of same length as the arrayorigianlly passed in", () => {
        expect(shuffleArray(testArr).length).toBe(testArr.length)
    })
})