
const multiply = require('./index')

//describe - Used to group related tests together
describe('multiply',()=>{
    //it - Defines a single test case.
    it("2 and 5 multiply equal to 10",()=>{
        expect(multiply(2,5)).toBe(10) //toBe same as ===
    })
    
    //not equal test
    //it - Defines a single test case.
    it("2 and 5 multiply equal to 5",()=>{
        expect(multiply(2,5)).not.toBe(5) //toBe same as ===
    })
})