#!/usr/bin/env node

/* eslint-disable */

const fs = require('fs');

/*
 * countStudents - reads file in sync, and print student details
 *                Also print students based on group
 * @path: the file path
 * Return: Nothing
 */
function countStudents(fileName) {
  try {
    const content = fs.readFileSync(fileName, 'utf-8').toString();
    const students = content.trim().split('\n').slice(1);
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

      return 0;
    });
    console.log(`Number of students: ${students.length}`);
    for (const course in studentsByCourse) {
      const students = studentsByCourse[course];
      console.log(
        `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
