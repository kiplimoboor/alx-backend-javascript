/* eslint-disable array-callback-return */

const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.trim().split('\n').slice(1);
        let resText = `Number of students: ${content.length}\n`;

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
          resText += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
        resolve(resText);
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);
module.exports = app;
