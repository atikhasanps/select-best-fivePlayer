const playerArray =[];
function addToSelect(element){
    // console.log(element.parentNode.parentNode.children[0].innerText)
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const playerObj ={
        playerName : playerName 
    }

    playerArray.push(playerObj);
    console.log(playerArray)
}