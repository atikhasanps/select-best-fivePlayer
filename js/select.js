const playerArray =[];

function displayPlayer() {
    
}




function addToSelect(element){
    
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj ={
        playerName : playerName
    }
    playerArray.push(playerObj);
 
    document.getElementById('player-list').innerText = playerArray.length;
    
    displayPlayer(playerArray)
}