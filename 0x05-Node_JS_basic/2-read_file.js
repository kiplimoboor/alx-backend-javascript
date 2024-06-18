const fs = require('node:fs');

function countStudents(path) {
  try {
    const students = fs.readFileSync(path).toString('utf-8').trim().split('\n');
    console.log(students);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
