export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, curr) => accumulator + curr.id, 0);
}
