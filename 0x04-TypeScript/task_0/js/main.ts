// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Anewar",
    lastName: "Ahmed",
    age: 20,
    location: "Hirna",
};

const student2: Student = {
    firstName: "Kibru",
    lastName: "Alem",
    age: 22,
    location: "Harar",
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table and append a new row for each student in the array
const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append the table to the body of the HTML document
document.body.appendChild(table);