function initialiseExpenseTracker() {
  const form = document.querySelector('#expense-form');
  const tableBody = document.querySelector('#expense-table');
  
  const expenseNameInput = document.querySelector('#inputName');
  const expenseAmountInput = document.querySelector('#inputAmount');
  const expenseDateInput = document.querySelector('#inputDate');
  
  
  form.addEventListener('submit', (event) => {
      event.preventDefault();
  
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
}