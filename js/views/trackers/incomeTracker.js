function incomeTracker() {
    return `<div style="margin-left: auto; margin-right: auto; max-width: 600px;">
    <h1>Income Tracking</h1>
    <form id="income-form" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;">
        <label for="incomeName" style="margin-bottom: 5px; display: block;">Income Name</label>
        <input type="text" class="form-control" id="incomeName" style="width: 100%;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="incomeAmount" style="margin-bottom: 5px; display: block;">Income Amount</label>
        <input type="number" class="form-control" id="incomeAmount" step="0.01" style="width: 100%;">
      </div>
      <button type="submit" class="btn btn-primary" style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px;">Add Income</button>
    </form>
    <table class="table" id="incomeTable" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th style="border: 1px solid #ccc; padding: 10px;">Income Name</th>
          <th style="border: 1px solid #ccc; padding: 10px;">Income Amount</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      <tfoot>
        <tr>
          <td style="border: 1px solid #ccc; padding: 10px;"><strong>Total</strong></td>
          <td id="totalIncome" style="border: 1px solid #ccc; padding: 10px;">0.00</td>
        </tr>
      </tfoot>
    </table>
  </div>`;
}