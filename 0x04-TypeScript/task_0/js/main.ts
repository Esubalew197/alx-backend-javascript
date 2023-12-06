// main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  // Create an array named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Get the table element from the HTML
  const table = document.createElement('table');
  
  // Iterate through the studentsList and append a new row for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    // Set the text content of the cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
  // Append the table to the body of the HTML document
  document.body.appendChild(table);
  