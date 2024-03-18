//gathering the form element of the expense form
const form = document.querySelector('#expense-form');
//gathering the table body for the expense results
const tableBody = document.querySelector('#expense-table');

// Gathers the form inputs of the expense form
const expenseNameInput = document.querySelector('#inputName'); // #inputnumber wrong ID
const expenseAmountInput = document.querySelector('#inputAmount');
const expenseDateInput = document.querySelector('#inputDate');

// Listens for the form submit
form.addEventListener('submit', (event) => {
    // stops the reset of the form
    event.preventDefault();

    // values from the form inputs of the expense form
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    let expenseDate = expenseDateInput.value;

    // Converts date from US to GB
    // https://www.scaler.com/topics/convert-string-to-date-javascript/
    expenseDate = new Date(Date.parse(expenseDate));
    expenseDate = expenseDate.toLocaleDateString('en-GB');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${expenseName}</td>
      <td>£${expenseAmount.toFixed(2)}</td>
      <td>${expenseDate}</td>
    `;

    tableBody.appendChild(newRow);
});