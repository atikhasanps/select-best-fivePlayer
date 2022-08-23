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
            alert('Already added Five Player. You cant add more.')
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





//                <------- Budget Part------->

document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputPerCost = document.getElementById('input-per-cost');
    const perCost = inputPerCost.value ;
    const totalAddedPlayer = playerArray.length;
    const totalCost = perCost * totalAddedPlayer;
    

    const totalExpensesId = document.getElementById('totalExpenses');
    const totalExpenses = totalExpensesId.innerText ;
    console.log(totalExpenses) 

})

