const playerArray =[];

function displayPlayer(selectPlayer) {
    
    console.log(selectPlayer);
    const playerListbody = document.getElementById('player-list');
    playerListbody.innerHTML ='';

     

    for(let i =0; i<selectPlayer.length; i++){

        const name = playerArray[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML = `

        <th>${i+1}</th>
        <td>${name}</td>
        
        `;
        if(selectPlayer.length <6){
            playerListbody.appendChild(tr);
        }
        else{
            alert('hello')
        }
    }
}




function addToSelect(element){
    
    const playerName = element.parentNode.parentNode.children[0].innerText;
    element.disabled = true;
    const playerObj ={
        playerName : playerName
    }
    playerArray.push(playerObj);
 
    document.getElementById('total-added').innerText = playerArray.length;
    
    displayPlayer(playerArray);
}