 var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
     floatAge = parseFloat(prompt("Enter age in years"));
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks = parseInt(floatDays/7).toFixed(2);
     intFortnights = parseInt(floatDays/14).toFixed(2);
     alert("Your Ages in:");
     alert("Days" + floatDays + " " + " " + "Months" + floatMonths + " " + " " + "Weeks" + intWeeks + " " + " " + "Fortnights" + intFortnights);