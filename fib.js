//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	if(isNaN(intCount) || intCount < 2 || intCount > 100)
    {
        alert("Number is not applicable.");
        $("total_fib").value="";
    }
	else
    {
        var i=0;  // sets the first number in the Fibonacci series to 0
        var j=1;  //sets the second number in the Fibonacci series to 1
        var k;    //k is calculated by adding i+j and represents the next Fibonacci number
        var stringOutput = "1 0";//initialize the Fibonacci series output to include the first two numbers
    
        while (intCount > 2)
        {
            k = i + j;
            stringOutput = stringOutput + "" + k;
            i = j;
            j = k;
            intCount--;
        }
        $("output").value = stringOutput;
    }
};
// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  