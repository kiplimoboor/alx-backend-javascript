const fs = require('node:fs');

function countStudents(path) {
  try {
    const students = fs
      .readFileSync(path)
      .toString('utf-8')
      .trim()
      .split('\n')
      .slice(1);

    const groupedStudents = { SWE: [], CS: [] };

    for (let student of students) {
      student = student.split(',');
      groupedStudents[student[3]].push(student[0]);
    }

    console.log('Number of students: ' + students.length);

    for (const group in groupedStudents) {
      const studentsInGroup = groupedStudents[group];
      console.log(
        `Number of students in ${group}: ${studentsInGroup.length}. List: ${studentsInGroup.join(',')}`
      );
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
