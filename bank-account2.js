var accounts = [];

// Account object
// balance number
// username string

function createAccount (account) {
	accounts.push(account);
	return account;
}
// createAccount(account)
// push onto accounts array
// return account


function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}
// getAccount(username)
// find matching account using forEach


// Deposit(account, amount)

function deposit(account, amount) {
	account.balance += amount;
}

// Withdraw(account, amount)

function withdraw(account, amount) {
	account.balance -= amount;
}

// getBalance(account)

function getBalance(account) {
	return account.balance;
	console.log(account);
}

var michaelsAccount = createAccount({
	username: 'Michael',
	balance: 0
});

deposit(michaelsAccount, 100);
console.log(getBalance(michaelsAccount));

withdraw(michaelsAccount, 10);
console.log(getBalance(michaelsAccount));

var existingAccount = getAccount('Michael');
console.log(getBalance(michaelsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 35
});

console.log(accounts);



