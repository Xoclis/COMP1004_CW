/* 		Budget Logic:
Very Good:	== 45% and > 25%	>= 1000
Good:	> 15%	>= 850
Medium:	> 7.5%	>= 500
Bad:	>= 2%	>= 250
Very Bad	== 0%	> 250 */

// Form
const form = document.querySelector('#budget-form');
// Form Inputs
const mIncomeInput = document.querySelector('#income');
const rentInput = document.querySelector('#rent');
const utilitiesInput = document.querySelector('#utilities');
const gorceriesInput = document.querySelector('#groceries');
const transportationInput = document.querySelector('#transportation');
const entertainmentInput = document.querySelector('#entertainment');
const savingsInput = document.querySelector('#savings');

const tableBody = document.querySelector('#budget-table');

form.addEventListener('submit', (event) => {
    // prevents page reset
    event.preventDefault();

    // Calculation Values from Form Inputs
    // const === constant and let === local variable
    // stored as strings (string === text) converted to floats (numbers with decimal points)
    const mIncome = parseFloat(mIncomeInput.value);
    const rent = parseFloat(rentInput.value);
    const utilities = parseFloat(utilitiesInput.value);
    const groceries = parseFloat(gorceriesInput.value);
    const transportation = parseFloat(transportationInput.value);
    const entertainment = parseFloat(entertainmentInput.value);
    const savings = parseFloat(savingsInput.value);

    // Budget
    const budget = mIncome - rent - utilities - groceries - transportation - entertainment;

    // Optimiser Percent
    const optimiserPercent = SavingsOptimiser(budget);

    // Savings Total
    const savingsTotal = savings + (budget * optimiserPercent);

    // Remaining Funds
    const remainingFunds = budget - (budget * optimiserPercent);

    // Remove the existing row if any
    if (tableBody.childNodes !== null)
        tableBody.removeChild(tableBody.childNodes[0]); 

    //creates a new table row (tr)
    const newRow = document.createElement('tr');
    // initialises the newRow element with column data
    newRow.innerHTML = `
      <td>£${budget.toFixed(2)}</td>
      <td>${optimiserPercent * 100}%</td>
      <td>£${savingsTotal.toFixed(2)}</td>
      <td>£${remainingFunds.toFixed(2)}</td>
    `;
    
    // appends the new row to the table body
    tableBody.appendChild(newRow);

    // Displays the table
    DisplayTable();
});

function SavingsOptimiser(budget)
{
    // Very Good
    if(budget >= 1000)
    {
        // 45%
        if(budget > 2000) return 0.45;
        // 35%
        else if (budget > 1500) return 0.35;
        // 25%
        return 0.25;  
    }
    // Good
    else if(budget >= 850) return 0.15;
    // Medium
    else if(budget >= 500) return 0.075;
    // Bad
    else if(budget >= 250) return 0.02;
    // Very Bad
    return 0;
}

function DisplayTable()
{
    const table = document.querySelector('#table');
    table.style.display = 'block';
}