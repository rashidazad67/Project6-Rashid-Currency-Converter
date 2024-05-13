import inquirer from "inquirer";

console.log("\nWelcome to Rashid Currency Coverter\n");

//Define currencies and their exchange rates.

let exchange_rate: any = {
    "USD" : 1,      //Base currency
    "Euro": 0.9,
    "GBP": 0.95,
    "PKR": 280,
    "CAD": 1.3,
    
    // Add more currencires

}

// Prompt the user to select currencies to convert

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "Euro", "GBP", "PKR", "CAD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "Euro", "GBP", "PKR", "CAD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"

    }
]);

//Perform currency conversion

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of conversion

let base_amount = amount/from_amount
let converted_amount = base_amount*to_amount

//Display the cob=nversion

console.log(`Converted amount = ${converted_amount.toFixed(2)}`);
