// const playerArray =[];

// function displayPlayer(selectPlayer) {
    
//     // console.log(selectPlayer);
//     const playerListbody = document.getElementById('player-list');

//     playerListbody.innerHTML = '';
//     for(let i = 0; i<selectPlayer.length; i++ ){

//         // console.log(playerArray[i]).playerName;
//         const name = playerArray[i].playerName;

//         const tr = document.createElement("tr");
//         tr.innerHTML = `

//         <th>${i +1}</th>
//         <td>${name}</td>
        
//         `;
//         playerListbody.appendChild("ol");
//     }
// }




// function addToSelect(element){
    
//     const playerName = element.parentNode.parentNode.children[0].innerText;

//     const playerObj ={
//         playerName : playerName
//     }
//     playerArray.push(playerObj);
 
//     // document.getElementById('player-list').innerText = playerArray.length;
    
//     displayPlayer(playerArray)
// }