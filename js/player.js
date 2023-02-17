let bestPlayerName = [];

function displayPlayerName(playerNames){
    
    const tableBody = document.getElementById('best-player-list-added');
    tableBody.innerHTML = '';
    
    for(let i = 0; i < playerNames.length; i++){
         const name = playerNames[i]

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${name}</td>
            `
            tableBody.appendChild(tr);
        
    }
}

function selectPlayerBtn(element){

    const playerName = element.parentNode.children[0].innerText;
    bestPlayerName.push(playerName)

    if(bestPlayerName.length <= 5){
        document.getElementById('total-player').innerText =  bestPlayerName.length;
        displayPlayerName(bestPlayerName);
        element.disabled = true;
    }else{
        alert('You can add only 5 players');
    }
   
}


