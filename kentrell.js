const billsTable = document.getElementById("billsTable");
const foodTable = document.getElementById("foodTable");
const entertainmentTable = document.getElementById("entertainmentTable");
const purchaseInfoForm = document.getElementById("purchaseInfo");

const expenseDescription = document.getElementById("purchase-information-description");
const expenseDate = document.getElementById("purchase-information-date");
const expensePrice = document.getElementById("purchase-information-price");
const expenseType = document.getElementById("purchase-type-dropdown");

class BudgetBuddy {
    constructor() {
        this.budgetSubmitForm = document.getElementById('budget');
        this.userBudgetDisplay = document.getElementById("user-budget");
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
    submitExpense() {
        purchaseInfoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const selectedType = expenseType.value;
            console.log(selectedType);
        })
    }
}


const newBudget = new BudgetBuddy()

newBudget.submitBudgetInput();
newBudget.submitExpense();


//function budgetFunctions() {
//const budgetSubmitForm = document.getElementById('submit-your-budget');
//const userBudgetInput = parseInt(document.getElementById('what-is-your-budget').value);
//const userBudgetDisplay = document.getElementById("user-budget");
