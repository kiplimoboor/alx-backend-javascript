/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.trim().split('\n').slice(1);

        console.log(`Number of students: ${content.length}`);

        const groupedStudents = {};
        content.map((student) => {
          const studentDetails = student.split(',');
          const [firstName, course] = [studentDetails[0], studentDetails[3]];

          if (Object.hasOwnProperty.call(groupedStudents, course)) {
            groupedStudents[course].push(firstName);
          } else {
            groupedStudents[course] = [firstName];
          }
        });

        for (const [key, value] of Object.entries(groupedStudents)) {
          console.log(
            `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
