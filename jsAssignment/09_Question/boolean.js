/*

Question

09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value.
*/


//true values   

console.log("Truthy values\n----------------\n");
 if("wakanda"){
    console.log("String act as a true value\n");

 }
 if(123){
    console.log("numbers acts as a true value\n");
 }
 let arr=[];
 if(arr){
    console.log("array acts as a true value\n");
 }
 let obj ={};
 if(obj){
    console.log("object acts as a true value\n");
 }
 if(true){
    console.log("boolean acts as a true value\n");

 }



 console.log("Falsey values\n----------------\n");

 if(''!=true){
    console.log("empty string acts as falsy value\n");
}
if(0!=true){
    console.log("0 acts as falsy value\n");
}
if(null!=true){
    console.log("null act as falsy value\n");
}
if(undefined!=true){
    console.log("undefined acts as falsy value\n");
}
if(NaN != true){
    console.log("NaN acts as falsy value\n");
}
 
/**
 Truthy values
----------------

String act as a true value

numbers acts as a true value

array acts as a true value

object acts as a true value

boolean acts as a true value

Falsey values
----------------

empty string acts as falsy value

0 acts as falsy value

null act as falsy value

undefined acts as falsy value

NaN acts as falsy value

 */