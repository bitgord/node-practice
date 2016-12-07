var isValid = false;

// isValid = true;

//change value
// isValid = !isValid;


//function to toggle the bollean
function toggleBoolean (booleanVar) {
	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		console.log('Not a bool');
	}
}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);