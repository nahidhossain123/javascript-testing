const multiply = require('./index')

//TEST SUITE
//test - Defines a single test case.
test("2 and 5 multiply equal to 10",()=>{
    //equality test
    expect(multiply(2,5)).toBe(10) //toBe same as ===
})

test("2 and 5 multiply equal to 5",()=>{
    //equality test
    expect(multiply(2,5)).not.toBe(5) //toBe same as ===
})

//object testing
test('Object Equality',()=>{
    let data = {A:'A'}
    data['B'] ='B'
    expect(data).toBe(data) //deep equal
})


//null values test
test('Null Values',()=>{
    const value = null
    expect(value).toBeNull()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()
    expect(value).toBeFalsy()
})

//zero values test
test('Zero Values',()=>{
    const value = 0
    expect(value).not.toBeNull()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()
    expect(value).toBeFalsy()
})


//comparison test
test('Number Comparison',()=>{
    const value = 5+5
    expect(value).toBeGreaterThan(9)
    expect(value).toBeGreaterThanOrEqual(10)
    expect(value).toBeLessThan(11)
    expect(value).toBeLessThanOrEqual(10)
    expect(value).toBe(10)
    expect(value).toEqual(10)
})

//floating value comparison
test('Floating Value Comparison',()=>{
    const value = 0.2+0.3
    expect(value).toBeCloseTo(0.5,5)
})


//string value comparison
test('String Value Comparison',()=>{
   expect('NAHID').toMatch('NAHID')
   expect('NAHID').not.toMatch('O')
})


//array
test('Array Matchers',()=>{
   let array = [
    'nahid',
    'ball',
    'cricket',
    'null'
   ]
   expect(array).toContain('nahid')
   expect(array).not.toContain('nan')
})

//test only to skip other tests
test.only('Array Matchers',()=>{
    let array = [
     'nahid',
     'ball',
     'cricket',
     'null'
    ]
    expect(array).toContain('nahid')
    expect(array).not.toContain('nan')
 })


  //exception matcher
 test.only('Array Matchers',()=>{

 const openInvalidFile = ()=>{
    throw new Error('file not found')
 }

    expect(()=>openInvalidFile()).toThrow()
    expect(()=>openInvalidFile()).toThrow(Error)
    expect(()=>openInvalidFile()).toThrow('file not found')
    expect(()=>openInvalidFile()).toThrow(/file not found/)
 })



