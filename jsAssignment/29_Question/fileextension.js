/*
Question
29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

*/

function extensionType(filename){
    const [name ,extensionType] = filename.split(".");
    console.log(`Extension Type is : ${extensionType}`);
}

extensionType('NithiN.jpg');

extensionType('NithiN.png');
extensionType('NithiN.js');
extensionType('NithiN.cpp');
extensionType('NithiN.java');
extensionType('NithiN.py');

/** output:
Extension Type is : jpg
Extension Type is : png
Extension Type is : js
Extension Type is : cpp
Extension Type is : java
Extension Type is : py
 */