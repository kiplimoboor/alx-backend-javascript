/* eslint-disable */
const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  res.writeHead(200, { 'Content-Type': 'application/text' });
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
  }
  if (reqUrl === '/students') {
    const data = fs.readFileSync('database.csv', 'utf8');
    const students = data.trim().split('\n').slice(1);

    let resSentences = ['This is the list of our students'];
    const groupedStudents = {};
    const noOfStudents = students.length;

    for (let i = 0; i < noOfStudents; i++) {
      const studentProps = students[i].split(',');
      const [firstName, field] = [studentProps[0], studentProps[3]];

      if (field in groupedStudents) {
        groupedStudents[field].push(firstName);
      } else {
        groupedStudents[field] = [firstName];
      }
    }

    resSentences.push('Number of students: ' + noOfStudents);

    for (const [key, value] of Object.entries(groupedStudents)) {
      resSentences.push(
        `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
      );
    }
    const response = resSentences.join('\n');
    console.log(response);
    res.write(response);
  }
  res.end();
});

app.listen(1245);
module.exports = app;
