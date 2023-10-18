# Assignment
The program will need to ask the user for the number of kilometers they want to travel and the passenger's age. 
Based on this information, it will have to calculate the total price of the trip according to the following rules:

1. The ticket price is defined based on the kilometers (€0.21 per km);
2. A 20% discount is applied for minors; 
3. A 40% discount is applied for those over 65.

The output of the final price should be rounded to a maximum of two decimal places to indicate cents on the price.

## Solution

### Data Collection
1. Ask the user for the number of kilometers they want to travel;
2. Ask the user the passenger's age;
3. Calculate the ticket cost based on the distance to be traveled (€0.21/km).
    - Apply a potential 20% discount to users under the age of 18.
    - Apply a potential 40% discount to users aged 65 years or older. 

### Program Logic
1. Set conditional statements based on the user's age:
    - IF the user is 65 years of age or older, apply a 40% discount;
    - ELSE IF he user is under 18 years of age, apply a 20% discount;
    - ELSE the user pays the full ticket price.
2. Calculate the total ticket price based on the kilometers to be traveled and the user's age;
3. Set the final ticket price to a maximum of two decimal places to indicate cents on the price;
4. Prepare the result message to be printed.

### Output
Print the message to the page. 