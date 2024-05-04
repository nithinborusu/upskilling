// //javascript stage1
// // function and object


// //topic:function

// function sum(num1,num2){
//     //definition of function

//     console.log(num1+num2,"addition");
// }
// sum(14,20);//calling of function
// sum(30,39);

// //function with return type
// function mul(val1,val2){
//     let result = val1*val2;
//     return result;
// }
// let prod = mul(10,25);
// console.log(prod);
// //string
// function URL(url,domain){
//     let con= 'https://';
//     let result =con+url+domain;
//     return result;
// }
// let anuragsite= URL('anuragtiwari','.me');
// console.log(anuragsite);
// //for n parameters(array)
// function sum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// let sumarray = [1,2,3,4];
// let res = sum(sumarray);
// console.log(res);

// function nihal(){
//     let sum =0;
//     for(let i=0;i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(nihal(7,8,9,1,2,3));

//arrow function
let shiva = (var1,var2)=>{
    console.log('me bhagwan hu',var1,var2);
}
shiva(1,2);

//object 
let userName = {
    firstName :'nithin',
    lastname :'borusu',
    role :'admin',
    logincount:25,


};
console.log(userName);
console.log(userName.role);
userName.logincount = 61;
console.log(userName);
//for in
for(let x in userName){
    console.log(x);
    console.log(userName[x]);
}