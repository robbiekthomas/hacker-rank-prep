function gradingStudents(grades) {
  const result = [];

  for (const grade of grades) {
    if (grade < 38) {
      result.push(grade);
    } else if (grade % 5 >= 3) {
      console.log(grade % 5);
      result.push(grade + (5 - (grade % 5)));
    } else {
      result.push(grade);
    }
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
