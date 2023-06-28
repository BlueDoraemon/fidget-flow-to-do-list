//dom manipulation 

function dropItIn(array,targetContainer){
    if (array instanceof HTMLElement){
        targetContainer.addChild(array);
    } else if (Array.isArray(array)) {
    array.forEach((e)=>{
        targetContainer.addChild(e);
    });
    } else {
        // Item is neither an HTMLElement nor an array
        // Handle the case when item is not an HTMLElement or an array
        console.log('Item is neither an HTMLElement nor an array');
    }
    return targetContainer;
}

module.exports = {dropItIn};