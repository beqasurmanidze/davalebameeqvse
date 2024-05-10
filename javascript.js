let age = prompt("enter your age");

let movieType = prompt("3D or normal");

let time = prompt("evening or morning");

let sale = prompt("do you have sale ticket?");

let sum = 0;

if (age < 10) {
  sum = 5;
} else if (age > 10 && 65) {
  sum = 15;
} else if (age > 65) {
  sum = 10;
} else {
  alert("wrong");
}

if (movieType == "3D") {
  sum = sum + 10;
} else if ((movieType = "normal")) {
  sum = sum + 0;
} else if (time == "evening") {
  sum = sum + 5;
} else {
  sum + 0;
}

switch (sale) {
  case "yes":
    sum = sum - 5;
    break;
  case "no":
    sum + 0;
    break;
}

alert(`tqven sul giwevt ${sum}-laris gadaxda`);
