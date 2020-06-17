const billsTable = document.getElementById("billsTable");
const foodTable = document.getElementById("foodTable");
const entertainmentTable = document.getElementById("entertainmentTable");
const clothingTable = document.getElementById("clothingTable")
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
            // const newRow = document.createElement("tr");
            //     const newData = document.createElement("td");
            //     const newData1 = document.createElement("td");
            //     const newData2 = document.createElement("td");
            if (selectedType === "Bills") {
                const newRow = document.createElement("tr");
                const newData = document.createElement("td");
                const newData1 = document.createElement("td");
                const newData2 = document.createElement("td");
                newRow.append(newData);
                newRow.append(newData1);
                newRow.append(newData2);
                newData.innerText = document.getElementById("purchase-information-description").value; 
                newData1.innerText = document.getElementById("purchase-information-date").value;
                newData2.innerText = document.getElementById("purchase-information-price").value;
                billsTable.append(newRow);
            } else if (selectedType === "Food") {
                newRow.append(newData);
                newRow.append(newData1);
                newRow.append(newData2);
                newData.innerText = document.getElementById("purchase-information-description").value;
                newData1.innerText = document.getElementById("purchase-information-date").value;
                newData2.innerText = document.getElementById("purchase-information-price").value;
                foodTable.append(newRow);
            } else if (selectedType === "Entertainment") {
                newRow.append(newData);
                newRow.append(newData1);
                newRow.append(newData2);
                newData.innerText = document.getElementById("purchase-information-description").value;
                newData1.innerText = document.getElementById("purchase-information-date").value;
                newData2.innerText = document.getElementById("purchase-information-price").value;
                entertainmentTable.append(newRow);
            } else if (selectedType === "Clothing") {
                newRow.append(newData);
                newRow.append(newData1);
                newRow.append(newData2);
                newData.innerText = document.getElementById("purchase-information-description").value;
                newData1.innerText = document.getElementById("purchase-information-date").value;
                newData2.innerText = document.getElementById("purchase-information-price").value;
                clothingTable.append(newRow);
        } else if (selectedType === "empty") {
            alert("error... You didn't select a category")
        }
    })
}}


const newBudget = new BudgetBuddy()

newBudget.submitBudgetInput();
newBudget.submitExpense();


//function budgetFunctions() {
//const budgetSubmitForm = document.getElementById('submit-your-budget');
//const userBudgetInput = parseInt(document.getElementById('what-is-your-budget').value);
//const userBudgetDisplay = document.getElementById("user-budget");
