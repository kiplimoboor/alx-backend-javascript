/* eslint-disable array-callback-return */

const fs = require('fs');
function countStudents(filepath) {
  try {
    const data = fs
      .readFileSync(filepath, 'utf8')
      .toString()
      .trim()
      .split('\n')
      .slice(1);

    console.log('Number of students: ' + data.length);

    const studentsByField = {};
    data.map((student) => {
      const studentInfo = student.split(',');
      const firstName = studentInfo[0];
      const field = studentInfo.slice(-1);
      if (field in studentsByField) {
        studentsByField[field].push(firstName);
      } else {
        studentsByField[field] = [firstName];
      }
    });

    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
