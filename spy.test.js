const myModule= require("./spy")

//spy
test('should spy on myFunction and check if function is call',()=>{
    const spy = jest.spyOn(myModule,'myFunction')
    myModule.myFunction()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
})