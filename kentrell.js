class BudgetBuddy {
    constructor()   {
    this.budgetSubmitButton = document.getElementById('submit-your-budget');
    this.userBudgetInput = parseInt(document.getElementById('what-is-your-budget').value);
    this.userBudgetDisplay = document.getElementById("userBudget");
    this.amountSpentDisplay = document.getElementById("amountSpent");
    this.balanceDisplay = document.getElementById("balance");
    }

    submitBudgetInput() {
    const budgetAmout = this.userBudgetInput;
        if (this.userBudgetInput < 0) {
            alert("Your budget must be positive. Try again.");
        } else {
        this.userBudgetDisplay.innerText = "$" + budgetAmout; 
        }
    }
}

const newBudget = new BudgetBuddy() 

function budgetFunctions() {
const budgetSubmitButton = document.getElementById('submit-your-budget');
//const userBudgetInput = parseInt(document.getElementById('what-is-your-budget').value);
//const userBudgetDisplay = document.getElementById("userBudget");

budgetSubmitButton.addEventListener("submit", () => {
    event.preventDefault();
    newBudget.submitBudgetInput();
})

}
