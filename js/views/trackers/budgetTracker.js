function budgetTracker() {
    return ` <div style="margin-left: auto; margin-right: auto; max-width: 600px;">
    <h1 style="margin-top: 50px; margin-bottom: 50px; text-align: center;">Budget Calculator</h1>
    <div style="display: flex; justify-content: center;">
      <div style="width: 50%;">
        <form id="budget-form">
          <div style="margin-bottom: 20px;">
            <label for="income" style="margin-bottom: 10px; display: block;">Monthly Income:</label>
            <div style="display: flex;">
              <span style="padding: 8px; background-color: #fff; border: 1px solid #ccc;">&#163;</span>
              <input type="number" id="income" name="income" style="flex: 1; padding: 8px;" required>
            </div>
          </div>
  
          <div style="margin-bottom: 20px;">
            <label for="rent" style="margin-bottom: 10px; display: block;">Rent/Mortgage:</label>
            <div style="display: flex;">
              <span style="padding: 8px; background-color: #fff; border: 1px solid #ccc;">&#163;</span>
              <input type="number" id="rent" name="rent" style="flex: 1; padding: 8px;" required>
            </div>
          </div>
  
          <!-- Similarly style other form elements -->
  
          <button type="submit" style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px;">Calculate</button>
        </form>
        <table id="table" style="display: none; margin-top: 20px; border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <th style="border: 1px solid #ccc; padding: 10px;">Monthly Budget</th>
              <th style="border: 1px solid #ccc; padding: 10px;">Savings Goal</th>
              <th style="border: 1px solid #ccc; padding: 10px;">New Savings Amount</th>
              <th style="border: 1px solid #ccc; padding: 10px;">Remaining Funds</th>
            </tr>
          </thead>
          <tbody id="budget-table">
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}