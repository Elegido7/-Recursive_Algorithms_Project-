// Set the age you wish to test
let ageGiven = 14;

// Defining the criteria for issuing tickets
function movieTicket(age) {
  if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else if (age >= 18) {
    return 20;
  }
}

function main(age) {
  if (isNaN(age)) {
    console.log('Please enter your correct age.');
  } else {
    const price = movieTicket(age);
    console.log(`The price of the movie ticket is: $${price}`);
  }
}

// Run the main function with the given age
main(ageGiven);
