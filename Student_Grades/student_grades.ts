let englishMarks: number = 35;
let urduMarks: number = 25;

let average: number = (englishMarks + urduMarks) / 2;

let grade: string;

if (average >= 80) {
  grade = "A";
} else if (average >= 70 && average < 80) {
  grade = "B";
} else if (average >= 60 && average < 70) {
  grade = "C";
} else if (average >= 50 && average < 60) {
  grade = "D";
} else if (average >= 33 && average < 50) {
    grade = "E";
  } else {
  grade = "Fail";
}

console.log("Your average score is: " + average);
console.log("Your grade is: " + grade);
