/**
 Question
 13. Get user input using prompt(“Enter your age:”). 
 If user is 18 or older , give feedback:'You are old enough to drive'
  but if not 18 give another feedback stating to wait 
  for the number of years he needs to turn 18.
 */
let age = prompt("Enter Your age:");

if(age>= 18){
    console.log('You are old enough to drive');
}
else{
    console.log(`You have to wait for ${18-age} more years to drive `);
}


/*
Ouput

21

You are old enough to drive

16


You have to wait for 2 more years to drive

*/