class BudgetBuddy {
    constructor()   {
    this.budgetSubmitForm = document.getElementById('budget');
    this.userBudgetDisplay = document.getElementById("user-budget");
    this.amountSpentDisplay = document.getElementById("amountSpent");
    this.balanceDisplay = document.getElementById("balance");
    this.budgetRemaining;
    }

    submitBudgetInput() {
        this.budgetSubmitForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(this.budgetSubmitForm);
            this.budgetRemaining = parseFloat(data.get('budget-input')).toFixed(2);
            if (this.budgetRemaining < 0 || this.budgetRemaining === "NaN") {
                alert("Value cannot be negative and must be a number. Try again.");
            } else {
            this.userBudgetDisplay.innerText = "$" + this.budgetRemaining;
            }
        })
        }
    }

const newBudget = new BudgetBuddy() 

newBudget.submitBudgetInput(); 

//function budgetFunctions() {
//const budgetSubmitForm = document.getElementById('submit-your-budget');
//const userBudgetInput = parseInt(document.getElementById('what-is-your-budget').value);
//const userBudgetDisplay = document.getElementById("user-budget");
