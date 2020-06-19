const billsTable = document.getElementById("billsTable");
const foodTable = document.getElementById("foodTable");
const entertainmentTable = document.getElementById("entertainmentTable");
const clothingTable = document.getElementById("clothingTable")
const purchaseInfoForm = document.getElementById("purchaseInfo");
const updateBalance = document.getElementById("balance");
const updateSpent = document.getElementById("amountSpent");

const expenseDescription = document.getElementById("purchase-information-description");
const expenseDate = document.getElementById("purchase-information-date");
const expensePrice = document.getElementById("purchase-information-price");
const expenseType = document.getElementById("purchase-type-dropdown");
const bills = document.getElementById('bills-total');
const food = document.getElementById('food-total');
const entertainment = document.getElementById('entertainment-total');
const clothing = document.getElementById('clothing-table');

class BudgetBuddy {
    constructor() {
        this.budgetSubmitForm = document.getElementById('budget');
        this.userBudgetDisplay = document.getElementById("user-budget");
        this.budget;
        this.balanceRemaining;
        this.spentExpenses = 0;
        this.billsExpenses = 0;
        this.foodExpenses = 0;
        this.entertainmentExpenses = 0;
        this.clothingExpenses = 0;
    }

    submitBudgetInput() {
        this.budgetSubmitForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(this.budgetSubmitForm);
            this.budget = Number.parseFloat(data.get('budget-input')).toFixed(2);
            this.balanceRemaining = Number.parseFloat(data.get('budget-input')).toFixed(2);
            if (this.budget < 0 || this.budget === "NaN") {
                alert("Value cannot be negative and must be a number. Try again.");
            } else {
                this.userBudgetDisplay.innerText = "$" + this.budget;
                updateBalance.innerText = "$" + this.balanceRemaining;
            } 
        } 
        )
    }
    submitExpense() {
        purchaseInfoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const selectedType = expenseType.value;
            const newRow = document.createElement("tr");
                const newData = document.createElement("td");
                const newData1 = document.createElement("td");
                const newData2 = document.createElement("td");
                newRow.append(newData);
                newRow.append(newData1);
                newRow.append(newData2);
                newData.innerText = expenseDescription.value; 
                newData1.innerText = expenseDate.value;
                const itemPrice = Number.parseFloat(expensePrice.value);
                newData2.innerText = itemPrice;
                this.spentExpenses += itemPrice;
                this.balanceRemaining -= itemPrice;
            if (selectedType === "Bills") {
                billsTable.append(newRow);
                updateSpent.innerText = "$" + this.spentExpenses.toFixed(2);
                updateBalance.innerText = "$" + this.balanceRemaining.toFixed(2);
                this.billsExpenses += itemPrice;
                bills.innerText = "Total Bills: "+"$"+ parseFloat(this.billsExpenses).toFixed(2); 
            } else if (selectedType === "Food") {
                foodTable.append(newRow);
                updateSpent.innerText = "$" + this.spentExpenses.toFixed(2);
                updateBalance.innerText = "$" + this.balanceRemaining.toFixed(2);
                this.foodExpenses += itemPrice;
                food.innerText = "Total Food: "+"$"+ parseFloat(this.foodExpenses).toFixed(2);
            } else if (selectedType === "Entertainment") {
                entertainmentTable.append(newRow);
                updateSpent.innerText = "$" + this.spentExpenses.toFixed(2);
                updateBalance.innerText = "$" + this.balanceRemaining.toFixed(2);
                this.entertainmentExpenses += itemPrice;
                entertainment.innerText = "Total Entertainment: "+"$"+ parseFloat(this.entertainmentExpenses).toFixed(2);
            } else if (selectedType === "Clothing") {
                clothingTable.append(newRow);
                updateSpent.innerText = "$" + this.spentExpenses.toFixed(2);
                updateBalance.innerText = "$" + this.balanceRemaining.toFixed(2);
                this.clothingExpenses += itemPrice;
                clothing.innerText = "Total Clothing: "+"$"+ parseFloat(this.clothingExpenses).toFixed(2);
        } else if (selectedType === "empty") {
            newRow.remove();
            alert("error... You didn't select a category");
        } if (this.balanceRemaining <= 15) {
                alert("You are reaching your budget limit for the week");
            } else if (this.balanceRemaining <= 0) {
                alert("Warning: You have no more money!");
            }
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
