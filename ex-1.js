let accountBalance = 400;
let depositAmountFromUser = "10";

depositAmountFromUser = Number(depositAmountFromUser);
console.log(depositAmountFromUser);

accountBalance = accountBalance + depositAmountFromUser;

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
