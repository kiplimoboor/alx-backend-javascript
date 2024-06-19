#!/usr/bin/env node

/* eslint-disable */

const fs = require('node:fs/promises');

/*
 * countStudents - counts students in courses async
 *
 * @path: path to database file
 *
 * Return: a Promise
 */

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const content = data.toString();

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
    });
    console.log(`Number of students: ${students.length}`);
    for (const course in studentsByCourse) {
      const students = studentsByCourse[course];
      console.log(
        `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`
      );
    }

    return data;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
