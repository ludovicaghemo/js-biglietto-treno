// DATA COLLECTION

// Ask the user for the number of kilometers and age
const userDistance = parseInt(prompt("Hello user! Please enter the number of kilometers you will be traveling."));
const userAge = parseInt(prompt("Great! Now please enter your age."));
console.log(userDistance, userAge);

// Calculate the ticket price
const ticketPrice = userDistance * 0.21;
console.log(ticketPrice);



// PROGRAM LOGIC 

// Conditional statements and calculation of the total ticket price with max 2 decimal places
if (userAge >= 65) {
    totalTicketPrice = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);
    console.log(totalTicketPrice);
} else if (userAge < 18) {
    totalTicketPrice = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
    console.log(totalTicketPrice);
} else {
    totalTicketPrice = ticketPrice.toFixed(2); 
    console.log(totalTicketPrice);
}

// Prepare the result message to be printed
const message = `
<h3 id="ticket-price-result"> We are pleased to inform you that the total price of your ticket is: 
<span class="text-success"> ${totalTicketPrice}€</span>!</h3>
<p>Purchase it now before prices go up!</p>
`; 
console.log(message);

// OUTPUT
document.getElementById("ticket-price-result").innerHTML = message;