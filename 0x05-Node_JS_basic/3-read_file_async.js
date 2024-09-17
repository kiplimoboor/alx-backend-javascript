/* eslint-disable */
const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        reject(err);
        throw new Error('Cannot load the database');
      }

      data = data.toString().trim().split('\n').slice(1);
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
      resolve(data);
    });
  });
}

module.exports = countStudents;
