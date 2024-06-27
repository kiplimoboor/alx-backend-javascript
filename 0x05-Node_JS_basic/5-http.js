/* eslint-disable */

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
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
      res.write(response);
      res.end();
    });
  }
});

app.listen(1245, '127.0.0.1', () => {});

module.exports = app;
