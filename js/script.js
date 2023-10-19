// DATA COLLECTION

// Ask the user for the number of kilometers and age
const userDistance = parseInt(prompt("Hello user! Please enter the number of kilometers you will be traveling."));
const userAge = parseInt(prompt("Great! Now please enter your age."));
const kmPrice = 0.21;
console.log(userDistance, userAge, kmPrice);


// PROGRAM LOGIC 

// Calculate the ticket price
const ticketPrice = userDistance * kmPrice;
console.log(ticketPrice);

// Conditional statements and calculation of the total ticket price with max 2 decimal places
if (userAge >= 65) {
    totalTicketPrice = (ticketPrice - (ticketPrice * 0.4));
    console.log(totalTicketPrice);
} else if (userAge < 18) {
    totalTicketPrice = (ticketPrice - (ticketPrice * 0.2));
    console.log(totalTicketPrice);
} else {
    totalTicketPrice = ticketPrice; 
    console.log(totalTicketPrice);
}

// Prepare the result message to be printed
let message = `
<h3 id="ticket-price-result"> We are pleased to inform you that the total price of your ticket is: 
<span class="text-success"> ${totalTicketPrice.toFixed(2)}€</span>!</h3>
<p>Purchase it now before prices go up!</p>
`; 
console.log(message);

// OUTPUT
document.getElementById("ticket-price-result").innerHTML = message;