
let str = "JavaScript";
let word1 ="Script";
let word2 ="script";
console.log(`The word "${word1}" ${str.includes(word1) ? 'is':'is not'} in the string.
`);
console.log(`The word "${word2}" ${str.includes(word2) ? 'is':'is not'} in the string.
`);

//output : The word "Script" is in the string.
//         The word "script" is not in the string.