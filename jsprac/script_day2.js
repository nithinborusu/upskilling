//conditions
// if-else
let rating =5;
if(rating==5){
    console.log('5 stars');
}
else if (rating==4){
    console.log('4 stars');
}
else {
    console.log('i am stars');
}
//switch case
let user = 'Admin';
switch(user){
    case 'Admin':
        console.log("redirect to admin page");
        break;
    case 'Mentor':
        console.log("redirect to mentor page");
        break;
    default:
        console.log("simple user");
}
//ternary operation
// condition?true:false
let userLogin= true;
userLogin? console.log("logout"):console.log('login');

//date
const now = new Date();
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//Math
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.floor(9.5));
console.log(Math.ceil(9.5));

let a=5;
let b =6;
console.log(Math.min(a,b));
console.log(Math.max(a,b));
//random
console.log(Math.random()); //0-.09999999999(0-1)
//to generate random value 1-10
console.log(Math.random()*10);

console.log(Math.pow(3,2));
console.log(Math.log(2));
console.log(Math.sin(60));

//loops
//do-while 
let i=6;
do{
    console.log(i);
    i++;
}
while(i<=5);
//while
while(i<10){
    console.log(i);
    i++;
}
//for
for(let i=0;i<6;i++){
    console.log(`${5}*${i} = ${5*i}`);
}

//for of
let fruit =['apple','bada Apple','chota Apple','double App'];
let upperFruit =[];
for(const pedhaletter of fruit){
    upperFruit.push(pedhaletter.toUpperCase());
}
console.log(upperFruit);

