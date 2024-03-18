// Global variables
var viewport;
var viewSelector = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Number to tell the view is defaulted.
    viewport = document.querySelector("#viewport");
    viewport.innerHTML = dashboard();
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
        viewport.innerHTML = dashboard();
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