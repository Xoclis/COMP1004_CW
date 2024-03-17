// Global variables
var viewport;
var viewSelector = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Number to tell the view is defaulted.
    viewport = document.querySelector("#viewport");
    viewport.innerHTML = init();
});

function changeView(e) {
    e.preventDefault();

    // remove active class from all
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    })

    let eTarget = e.target;

    eTarget.classList.add('active');

    // get the clicked element's text to change view
    let targetName = eTarget.getAttribute('name');

    // View Selector
    if (targetName === "dashboard" && viewSelector !== 0) {
        viewSelector = 0;
        viewport.innerHTML = init();
    } else if (targetName === "budget" && viewSelector !== 1) {
        viewSelector = 1;
        viewport.innerHTML = budgetTracker();
    } else if (targetName === "income" && viewSelector !== 2) {
        viewSelector = 2;
        viewport.innerHTML = incomeTracker();
    } else if (targetName === "expense" && viewSelector !== 3) {
        viewSelector = 3;
        viewport.innerHTML = expenseTracker();
    } 
}

function init() {
    return `<h1>Dashboard</h1>
    <p>This is the dashboard. (Called by Init Function)</p>`;
}

function budgetTracker() {
    return `<h1>Budget Tracker</h1>
    <p>This is the budget tracker. (Called by Budget Tracker Function)</p>`;
}


function incomeTracker() {
    return `<h1>Income Tracker</h1>
    <p>This is the income tracker. (Called by Income Tracker Function)</p>`;
}

function expenseTracker() {
    return `<h1>Expense Tracker</h1>
    <p>This is the expense tracker. (Called by Expense Tracker Function)</p>`;
}