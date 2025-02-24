function addItem(array,item){
     array.push(item)
    return array
}

function removeItem(array,item){
    let index = array.indexOf(item);
    if(index!=-1){
        array.splice(index,1)
    }
    return array;
}

function arrrayContains(array,item){
    return array.includes(item)
}

module.exports = {addItem,removeItem,arrrayContains}