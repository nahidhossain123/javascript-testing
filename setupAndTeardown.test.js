const { addItem } = require("./arrayUtils")

//Setup and Teardown
let testArray

beforeAll(()=>{
    console.log('before all test')
    testArray = []
})
afterAll(()=>{
    console.log('after all test')
    testArray = null
})
beforeEach(()=>{
    console.log('run before each test')
    testArray = []
})
afterEach(()=>{
    console.log('run after each test')
    console.log(testArray)
})

test('add item to array',()=>{
    addItem(testArray,'nahid')
    expect(testArray).toContain('nahid')
})

