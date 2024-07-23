/* eslint-disable */

const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
    for (const course in groupedStudents) {
      const courseStudents = groupedStudents[course];
      console.log(
        `Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
