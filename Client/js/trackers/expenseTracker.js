function initialiseExpenseTracker() {
  formConfiguration();
  updateExpense();
}

function formConfiguration() {
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


async function updateExpense() {
  const tableBody = document.querySelector('#expense-table');

  tableBody.innerHTML = '';

  const expenseRecords = await fetchExpense('550e8400-e29b-41d4-a716-446655440001');

  expenseRecords.forEach(record => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${record.name}</td>
    <td>£${record.amount.toFixed(2)}</td>
    <td>${record.date}</td>
    `;

    tableBody.appendChild(newRow);
  });
}


async function fetchExpense(uuid) {
  const url = 'http://localhost:3000/trackers/expense';
  const headers = { 'Content-Type': 'application/json' };

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) { 
        if (xhr.status === 200) {
          console.log('Data received:', xhr.responseText);

          const responseData = JSON.parse(xhr.responseText);
          
          resolve(responseData);
        } else {
          console.error('Failed to fetch data:', xhr.statusText);
          reject(xhr.statusText);
        }
      }
    };

    const data = JSON.stringify({ uuid: uuid }); 
    xhr.send(data);
  });
}