var grades = [100,50, 90, 19];

grades.push(55);

grades.unshift(1000);

// get last field from array
var grade = grades.pop();

// get first field from array
var grade2 = grades.shift();

console.log(grade);
console.log(grade2);
console.log(grades);

// do something with each part of an array
grades.forEach(function (grade) {
	console.log(grade);
});

// pull out item at beginning of array
console.log(grades[1]);
console.log(grades[0]);

//get length of array
console.log(grades.length);

// totalGrade = 0
var totalGrade = 0;

// forEach -> add grade to totalGrade
grades.forEach(function (grade) {
	totalGrade = totalGrade + grade;
	console.log(totalGrade);
});

var average = totalGrade / grades.length
console.log(average);

// totalGrade / total number of grades;


