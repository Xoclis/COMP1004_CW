function expenseTracker() {
    return `<div style="margin-top: 20px;">
    <h1>Expense Tracking</h1>
    <form id="expense-form" style="margin-bottom: 20px;">
      <div style="margin-bottom: 15px;">
        <label for="inputName" style="margin-bottom: 5px; display: block;">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter expense name" style="width: 100%;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="inputAmount" style="margin-bottom: 5px; display: block;">Amount</label>
        <input type="number" class="form-control" id="inputAmount" placeholder="Enter expense amount" style="width: 100%;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="inputDate" style="margin-bottom: 5px; display: block;">Date</label>
        <input type="date" class="form-control" id="inputDate" placeholder="Enter expense date" style="width: 100%;">
      </div>
      <div style="margin-bottom: 15px;">
        <button type="submit" class="btn btn-primary" style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px;">Submit</button>
      </div>
    </form>
    <table class="table" style="margin-top: 20px; border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th scope="col" style="border: 1px solid #ccc; padding: 10px;">Name</th>
          <th scope="col" style="border: 1px solid #ccc; padding: 10px;">Amount</th>
          <th scope="col" style="border: 1px solid #ccc; padding: 10px;">Date</th>
        </tr>
      </thead>
      <tbody id="expense-table">
      </tbody>
    </table>
  </div>`;
}