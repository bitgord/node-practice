var person = {
	gender: 'male',
	eyeColor: 'brown'
};

person.firstName = 'Michael';
person.lastName = 'Gord';
person.age = '24';

delete person.age;

console.log(person);

function greetUser (person) {
	console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

greetUser(person);
greetUser(person);
