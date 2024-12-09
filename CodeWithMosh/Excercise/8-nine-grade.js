// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks) {
  let sum = 0;
  let length = marks.length;
  for (let i = 0; i < length; i++) {
    sum += marks[i];
  }
  let average = sum / length;

  if (average >= 1 && average <= 59) return "F";
  if (average >= 60 && average <= 69) return "D";
  if (average >= 70 && average <= 79) return "C";
  if (average >= 80 && average <= 89) return "B";
  else return "A";
}

console.log(calculateGrade([80, 80, 50])); // "C"

function calculateGradeOptimize(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(arr) {
  let sum = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum / length;
}

console.log(calculateGradeOptimize([80, 80, 50])); // "C"
