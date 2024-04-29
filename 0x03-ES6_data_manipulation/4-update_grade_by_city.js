/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      for (const grade of newGrades) {
        if (grade.studentId === student.id) {
          student.grade = grade.grade;
        }
      }

      if (!student.hasOwnProperty('grade')) {
        student.grade = 'N/A';
      }
      return student;
    });
}
