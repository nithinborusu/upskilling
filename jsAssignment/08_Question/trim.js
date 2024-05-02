
/**
 Question

 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.
 */

let strSpace ="  nithin  ";
console.log(`length of the string before triming:${strSpace.length}`);

let str = strSpace.trim();
console.log(`length of the string after triming:${str.length}`);


// output :
// length of the string before triming:10
// length of the string after triming:6