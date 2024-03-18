function initialiseIncomeTracker() {
  const form = document.querySelector('#income-form'); // forgot hashtag
  const incomeNameInput = document.querySelector('#incomeName');
  const incomeAmountInput = document.querySelector('#incomeAmount');
  const tableBody = document.querySelector('#incomeTable tbody');
  const totalIncomeTd = document.querySelector('#totalIncome');

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

    // removes pound sign for calculation
    let totalIncome = parseFloat(totalIncomeTd.innerText.replace('£', ''));
    totalIncome += incomeAmount;
    totalIncomeTd.innerText = `£${totalIncome.toFixed(2)}`;

    incomeNameInput.value = '';
    incomeAmountInput.value = '';
  });
}