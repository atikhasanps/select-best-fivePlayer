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
    const totalPlayerCost = perCost * totalAddedPlayer;
    

    const playerExpensesId = document.getElementById('playerExpenses');
    const playerExpenses = playerExpensesId.innerText ;
    playerExpensesId.innerText = totalPlayerCost ;




document.getElementById('btn-calculate-total').addEventListener('click', function(){

    const inputManger = document.getElementById('input-manager');
    const managerCost = inputManger.value;
    
    const inputCoach = document.getElementById('input-coach');
    const coachCost = inputCoach.value ;

    const totalCostString = parseInt(totalPlayerCost) +parseInt(managerCost)  +parseInt(coachCost)  ;
    const totalCost = parseInt(totalCostString);

    const costTotal = document.getElementById('total-cost');
    const total = costTotal.innerText ;

    costTotal.innerText = totalCost  ;

})
})