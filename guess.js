
/* This is where I declared my variables that I would be using
 * for the program. */

var intMax, intMin, intRandom, intGuess, intCount;

// This section of the code tells the user to enter a number in the lowest range.
/*It would then take their value, which was represented by intMin, and validate it to be a number
*that has to be more than 0. If the number does not follow the rules of the while function then would
*return with a prompt that the user entered an invalid number.*/

intMin = parseInt(prompt("Choose the lower number in the range. It must be at least zero."));
while (intMin <0 || isNaN(intMin))
    {
    intMin = parseInt(prompt("I'm sorry. You entered an invalid number. Please Try Again"));
    }

// This section does the exact same thing as intMin except it is for intMax. It asks the user to enter a number in the highest range.
/*It would then take the users value, intMax, and validate it to make sure it is a number that is 2 more than intMin and would display
the message if the user entered an invalid number*/

intMax = parseInt(prompt("Choose the higher number in the range. It must be two more than the minimum."));
while (intMax <intMin + 2 || isNaN(intMax))
    {
    intMax = parseInt(prompt("I'm sorry. You entered an invalid number. Please Try Again."));
    }

//This line just generated a random number that the user has to guess. The line after it sets the loop counter to 1.
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);



intCount = 1;


/* The next section tells the user to guess the number that is in the range of intMax and intMin. It then validates
 * that number to make sure it is within the range of the maximum and minimum numbers and if not it will give the user an error message.*/

intGuess = parseInt(prompt("Enter your guess number. It must be within the maximum and minimum range."));
while (intGuess <intMin && intGuess >intMax)
    {
    intGuess = parseInt(prompt("I'm sorry. You entered an invalid number. Please Try Again."));
    }



/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 while (intGuess != intRandom)
 {
    if (intGuess<intRandom)
    {
        intGuess = parseInt(prompt("Guess is too low."));
    }
    else
    {
        intGuess = parseInt(prompt("Guess is too high."));
    }
    intCount++;
 }
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
