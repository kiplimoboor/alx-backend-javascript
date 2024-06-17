const fs = require('node:fs');

function countStudents(path) {
  try {
    const students = fs
      .readFileSync(path)
      .toString('utf-8')
      .trim()
      .split('\n')
      .slice(1);

    const groupedStudents = {};

    for (let student of students) {
      student = student.split(',');
      const firstName = student[0];
      const course = student[3];

      if (!groupedStudents.hasOwnProperty(course)) {
        groupedStudents[course] = [firstName];
      } else {
        groupedStudents[course].push(firstName);
      }
    }

    console.log('Number of students: ' + students.length);

    for (const group in groupedStudents) {
      const studentsInGroup = groupedStudents[group];
      console.log(
        `Number of students in ${group}: ${studentsInGroup.length}. List: ${studentsInGroup.join(', ')}`
      );
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
