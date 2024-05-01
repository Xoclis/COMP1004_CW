// Global variables
var viewport;
var viewSelector = 0;

var auth = {
        isAuthed: false,
        userUUID: '',
        isAdmin: false
    };

document.addEventListener('DOMContentLoaded', function() {
    // Number to tell the view is defaulted.
    viewport = document.querySelector("#viewport");
    viewport.innerHTML = dashboard();

    const welcomeNI = document.querySelector('#welcome');
    welcomeNI.style.display = 'none';
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
        initialiseBudgetTracker();
    } else if (targetName === "income" && viewSelector !== 2) {
        viewSelector = 2;
        viewport.innerHTML = incomeTracker();
        initialiseIncomeTracker();
    } else if (targetName === "expense" && viewSelector !== 3) {
        viewSelector = 3;
        viewport.innerHTML = expenseTracker();
        initialiseExpenseTracker();
    } else if (targetName === "signin" && viewSelector !== 4 && !auth.isAuthed) {
        viewSelector = 4;
        viewport.innerHTML = login();
        initialiseLoginSubmission();
    } else if (targetName === "register" && viewSelector !== 5 && !auth.isAuthed) {
        viewSelector = 5;
        viewport.innerHTML = register();
        initialiseRegisterSubmission();
    } else if (targetName === "admin" && viewSelector !== 6 && auth.isAdmin) {
        viewSelector = 6;
        viewport.innerHTML = admin();
        initialiseAdminFunctions();
    }

    authFormConfiguration();
}

function authFormConfiguration() {
    let inputs = document.querySelectorAll(".auth-group .form-group input");
    
    inputs.forEach((input) => {
        input.addEventListener('change', function() {
            let labels = document.querySelectorAll(".auth-group .form-group label");
            
            labels.forEach((label) => {
                if(input.value !== "") label.classList.add("active");
                else label.classList.remove("active");
            });
        });
    });
}