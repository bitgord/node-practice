var accounts = [];



function createAccount (account) {
	accounts.push(account);
	return account;
}



function getAccount (username) {
	var matchedAccount;

	// for loop or while loop
	// account[0] accounts[1] accounts[i]
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}


function deposit(account, amount) {
	// only accept number, use typeof
	if (typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('deposit failed. not a number');
	}
}


function withdraw(account, amount) {
	// only accept number, use typeof
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('withdraw failed. not a number');
	}
}


function getBalance(account) {
	return account.balance;
	console.log(account);
}

// createBalanceGetter(account)
// return function ()
// account.balance (return it)

function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}

var michael = createAccount({
	username: 'Michael',
	balance: 0
});

deposit(michael, 100);
withdraw(michael, 1);
withdraw(michael, 'my string');

var michael2 = getAccount('Michael');
var getMichael2Balance = createBalanceGetter(michael2);

console.log(getMichael2Balance());





