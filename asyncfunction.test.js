const fetchData = require('./asyncfunction');

test('Success Data Using Promise',()=>{
    return fetchData().then(res=>{
        expect(res).toBe('success')
    })
})

test('Failed Data Using Promise',async()=>{
    expect.assertions(1)
   try{
    await fetchData(true)
   }catch(error){
    expect(error).toBe('error occured')
   }
})