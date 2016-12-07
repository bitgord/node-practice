var account = {
	balance: 0
};

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

deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 100);

console.log(getBalance(account));


