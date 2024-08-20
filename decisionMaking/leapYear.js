//leap year searched using switch
function isLeapYear(year) {
  switch (true) {
    case year % 400 === 0:
      return true;
    case year % 100 === 0:
      return false;
    case year % 4 === 0:
      return true;
    default:
      return false;
  }
}
console.log(isLeapYear(2024));
