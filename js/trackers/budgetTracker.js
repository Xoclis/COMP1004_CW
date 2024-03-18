/* 		Budget Logic:
Very Good:	== 45% and > 25%	>= 1000
Good:	> 15%	>= 850
Medium:	> 7.5%	>= 500
Bad:	>= 2%	>= 250
Very Bad	== 0%	> 250 */


function initialiseBudgetTracker() {

    const form = document.querySelector('#budget-form');
    const mIncomeInput = document.querySelector('#income');
    const rentInput = document.querySelector('#rent');
    const utilitiesInput = document.querySelector('#utilities');
    const gorceriesInput = document.querySelector('#groceries');
    const transportationInput = document.querySelector('#transportation');
    const entertainmentInput = document.querySelector('#entertainment');
    const savingsInput = document.querySelector('#savings');
    
    const tableBody = document.querySelector('#budget-table');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const mIncome = parseFloat(mIncomeInput.value);
        const rent = parseFloat(rentInput.value);
        const utilities = parseFloat(utilitiesInput.value);
        const groceries = parseFloat(gorceriesInput.value);
        const transportation = parseFloat(transportationInput.value);
        const entertainment = parseFloat(entertainmentInput.value);
        const savings = parseFloat(savingsInput.value);
    
        const budget = mIncome - rent - utilities - groceries - transportation - entertainment;
        const optimiserPercent = SavingsOptimiser(budget);
        const savingsTotal = savings + (budget * optimiserPercent);
        const remainingFunds = budget - (budget * optimiserPercent);
    
        if (tableBody.childNodes !== null)
            tableBody.removeChild(tableBody.childNodes[0]); 
    
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>£${budget.toFixed(2)}</td>
          <td>${optimiserPercent * 100}%</td>
          <td>£${savingsTotal.toFixed(2)}</td>
          <td>£${remainingFunds.toFixed(2)}</td>
        `;
        
        tableBody.appendChild(newRow);
    
        DisplayTable();
    });
}

function SavingsOptimiser(budget)
{
    if(budget >= 1000)
    {
        // 45%
        if(budget > 2000) return 0.45;
        // 35%
        else if (budget > 1500) return 0.35;
        // 25%
        return 0.25;  
    }
    else if(budget >= 850) return 0.15;
    else if(budget >= 500) return 0.075;
    else if(budget >= 250) return 0.02;
    return 0;
}

function DisplayTable()
{
    const table = document.querySelector('#table');
    table.style.display = 'block';
}