/* eslint-disable */

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let response = 'This is the list of our students';
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    const students = data.toString().trim().split('\n').slice(1);

    const studentsByCourse = {};
    students.map((student) => {
      const studentInfo = student.split(',');
      const course = studentInfo[3];
      const firstName = studentInfo[0];
      if (Object.prototype.hasOwnProperty.call(studentsByCourse, course)) {
        studentsByCourse[course].push(firstName);
      } else {
        studentsByCourse[course] = [firstName];
      }
    });
    response += `\nNumber of students: ${students.length}`;
    for (const course in studentsByCourse) {
      const students = studentsByCourse[course];
      response += `\nNumber of students in ${course}: ${students.length}. List: ${students.join(', ')}`;
    }
    res.send(response);
  });
});

app.listen(port, () => {});

module.exports = app;
