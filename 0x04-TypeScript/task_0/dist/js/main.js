// main.ts
// Create two students
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
};
// Create an array named studentsList containing the two variables
var studentsList = [student1, student2];
// Get the table element from the HTML
var table = document.createElement('table');
// Iterate through the studentsList and append a new row for each student
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Set the text content of the cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
// Append the table to the body of the HTML document
document.body.appendChild(table);
//# sourceMappingURL=main.js.map