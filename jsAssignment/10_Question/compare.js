/*
Question


10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3   true
    - 4 >= 3  true
    - 4 < 3   false
    - 4 <= 3  false
    - 4 == 4   true
    - 4 === 4  true
    - 4 != 4   false
    - 4 !== 4  false
    - 4 != '4'  false
    - 4 !=='4'  true
    - 4 == '4'  true
    - 4 === '4'  false
    - Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4>3); //true

console.log(4>=3); //true

console.log(4<=3);  //false

console.log(4<3);  //false

console.log(4==4); //true

console.log(4===4); //true

console.log(4!=4); //false
   
console.log(4!==4);  //false

console.log(4!='4');  //false

console.log(4 !=='4') //true

console.log(4=='4');  //true

console.log(4==='4');  //false


if( (4!=4) === false){
    console.log(`Length of Python is ${'Python'.length}\nLength of Jargon is ${'Jargon'.length}`);

}

/**
 output:
 Length of Python is 6
 Length of Jargon is 6
 */