// THE HTML COMPONENT FOR BudgetTracker
function budgetTracker() { return `
<div style="margin: 0 auto; max-width: 800px">
  <h1 style="margin-top: 50px; text-align: center">Budget Calculator</h1>
  <div style="display: flex; justify-content: center">
    <div style="width: 50%">
      <form id="budget-form">
        <div style="margin-bottom: 15px">
          <label for="income" style="display: block; margin-bottom: 5px"
            >Monthly Income:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="income"
              name="income"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="rent" style="display: block; margin-bottom: 5px"
            >Rent/Mortgage:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="rent"
              name="rent"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="utilities" style="display: block; margin-bottom: 5px"
            >Utilities:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="utilities"
              name="utilities"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="groceries" style="display: block; margin-bottom: 5px"
            >Groceries:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="groceries"
              name="groceries"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="transportation" style="display: block; margin-bottom: 5px"
            >Transportation:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="transportation"
              name="transportation"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="entertainment" style="display: block; margin-bottom: 5px"
            >Entertainment:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="entertainment"
              name="entertainment"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <div style="margin-bottom: 15px">
          <label for="savings" style="display: block; margin-bottom: 5px"
            >Savings:</label
          >
          <div style="display: flex">
            <span style="display: inline-block; padding: 0.375rem 0.75rem"
              >£</span
            >
            <input
              type="number"
              id="savings"
              name="savings"
              style="
                flex: 1;
                margin-left: -1px;
                border-radius: 0.25rem;
                padding: 0.375rem 0.75rem;
              "
              required
            />
          </div>
        </div>

        <button
          type="submit"
          style="
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            padding: 0.375rem 0.75rem;
            cursor: pointer;
          "
        >
          Calculate
        </button>
      </form>
      <table id="table" style="display: none; margin-top: 20px; width: 100%">
        <thead>
          <tr>
            <th scope="col">Monthly Budget</th>
            <th scope="col">Savings Goal</th>
            <th scope="col">New Savings Amount</th>
            <th scope="col">Remaining Funds</th>
          </tr>
        </thead>
        <tbody id="budget-table"></tbody>
      </table>
    </div>
  </div>
</div>
`; }
