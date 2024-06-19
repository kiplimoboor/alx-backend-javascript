#!/usr/bin/env node

/* eslint-disable */

const fs = require('node:fs');

/*
 * countStudents - counts students in courses async
 *
 * @path: path to database file
 *
 * Return: a Promise
 */

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      const students = data.trim().split('\n').slice(1);
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

      console.log(`Number of students: ${students.length}`);
      for (const course in studentsByCourse) {
        const students = studentsByCourse[course];
        console.log(
          `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`
        );
      }
      resolve(true);
    });
  });
}

module.exports = countStudents;
