/**
 Question

17. Write a program which tells the number of days in a month.
 */

const month = prompt(" enter month");



if(month==2) alert('28/29 Days');
else if(month<=7 && month%2) alert('31 days');
else if(month <=7 && month%2==0) alert('30 days');
else if(month>7 && month%2==0) alert('31 days');
else if(month >7 && month%2) alert('30 days');

/**output:
 * 
 * 31 days
 */