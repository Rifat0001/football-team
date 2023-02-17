function getElementValueById(idElement){
    const inputElement = document.getElementById(idElement)
    const inputValue = parseFloat(inputElement.value)
    
    if (!isNaN(inputValue) && inputValue >= 0){
        return inputValue
    }else{
        alert('please  give the valid number in input field')
    }
          
}

function getElementInnerTextById(idElement){
const inputElemnt = document.getElementById(idElement)
const inputValue = parseFloat(inputElemnt.innerText)
return inputValue
}
function setElementInnerTextById(idElement, value){
const setElement = document.getElementById(idElement)

setElement.innerText = value;
if (!isNaN(value) && value >= 0){
    setElement.innerText = value;
}else{
    setElement.innerText = '';
}
}


document.getElementById('calculate-btn').addEventListener('click', ()=>{

    const totalPlaers = getElementInnerTextById('total-player')
    if(totalPlaers > 0){
       
            const perPlayerbudget = getElementValueById('perPlayerBudget')
       
            const playrsExpenses = totalPlaers * perPlayerbudget; 
          
            setElementInnerTextById('player-Expenses', playrsExpenses)
            
        }else{
            alert('Please Added plyaer first')
        }

})


document.getElementById('total-expenses').addEventListener('click', ()=>{
const totalPlaers = getElementInnerTextById('total-player')
if(totalPlaers > 0){
    
    const totalPlayerExpenses = getElementInnerTextById('player-Expenses')
    
    
    const managerExpenses = getElementValueById('manager-expenses');
    const coachExpenses = getElementValueById('coach-expenses');
   
    const totalExpenses = totalPlayerExpenses + managerExpenses + coachExpenses;
    setElementInnerTextById('total-Expenses', totalExpenses)
        
    }else{
        alert('Please Added plyaer first')
    }


})