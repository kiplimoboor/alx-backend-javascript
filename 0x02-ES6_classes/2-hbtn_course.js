export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Name set and get
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
  }

  get name() {
    return this._name;
  }

  // Length set and get
  set length(length) {
    if (!Number.isInteger(length)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  // Students set and get
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
