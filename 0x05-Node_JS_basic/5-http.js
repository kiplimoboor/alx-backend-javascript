/* eslint-disable */

const http = require('http');
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

const app = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
      res.write('Hello Holberton School!');
      res.end();
    } else if (req.url === '/students') {
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((output) => {
          res.end(output);
        })
        .catch(() => {
          res.statusCode = 404;
          res.end('Cannot load the database');
        });
    }
  })
  .listen(1245);

module.exports = app;
