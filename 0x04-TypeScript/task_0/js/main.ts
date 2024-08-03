interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jack',
  lastName: 'Will',
  age: 10,
  location: 'Emirates',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'London',
};

const studentsList: Array<Student> = [student1, student2];

function createTable(students: Array<Student>): void {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const headRow = document.createElement('tr');

  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th');
  tableHead.append(headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.append(bodyRow);
  }
  table.append(tableHead);
  table.append(tableBody);
  document.body.append(table);
}

createTable(studentsList);
