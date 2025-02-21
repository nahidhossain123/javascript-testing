const fetchData = (shouldFail=false)=>{
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject('error occured')
        }else{
            resolve('success')
        }
    },200)
}

module.exports = fetchData