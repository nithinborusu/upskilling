
/**
 Question
 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
 */

const even =[];
const odd =[];
for(let i=0;i<100;i++){
    if(i%2) odd.push(i);
    else even.push(i);
}

console.log(`
Even Numbers are\n ${even}\n
Odd Numbers are\n ${odd}\n
`);


/**
 Output
  Even Numbers are
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100

Odd Numbers are
1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99
 */