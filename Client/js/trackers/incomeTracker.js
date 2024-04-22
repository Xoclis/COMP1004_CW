function initialiseIncomeTracker() {
  formConfiguration();
  updateIncome();
}

function formConfiguration() {
  const incomeNameInput = document.querySelector('#incomeName');
  const incomeAmountInput = document.querySelector('#incomeAmount');

  const form = document.querySelector('#income-form'); // forgot hashtag
  const tableBody = document.querySelector('#incomeTable tbody');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const incomeName = incomeNameInput.value;
    const incomeAmount = parseFloat(incomeAmountInput.value);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${incomeName}</td>
      <td>£${incomeAmount.toFixed(2)}</td>
    `;

    tableBody.appendChild(newRow);

    updateTotal(incomeAmount);
  });
}

async function updateIncome() {
  const tableBody = document.querySelector('#incomeTable tbody');

  // Clear table body before appending
  tableBody.innerHTML = '';

  totalAmount = 0;

  const incomeRecords = await fetchIncome('550e8400-e29b-41d4-a716-446655440000');

  incomeRecords.forEach(record => {
      const newRow = document.createElement('tr');
      console.log(record);
      newRow.innerHTML = `
        <td>${record.name}</td>
        <td>£${record.amount.toFixed(2)}</td>
      `;
      tableBody.appendChild(newRow);

      totalAmount += parseFloat(record.amount);
  });

  updateTotal(totalAmount);
}

function updateTotal(incomeAmount) {
  const incomeNameInput = document.querySelector('#incomeName');
  const incomeAmountInput = document.querySelector('#incomeAmount');
  const totalIncomeTd = document.querySelector('#totalIncome');

  console.log(totalIncomeTd);
  // removes pound sign for calculation
  let totalIncome = parseFloat(totalIncomeTd.innerText.replace('£', ''));
  totalIncome += incomeAmount;
  totalIncomeTd.innerText = `£${totalIncome.toFixed(2)}`;

  incomeNameInput.value = '';
  incomeAmountInput.value = '';
}

async function fetchIncome(uuid) {
  const url = 'http://localhost:3000/trackers/income';
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