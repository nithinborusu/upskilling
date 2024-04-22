//Array Methods
let names = ['nithin', 'seejaw','sndp','monie','gay3'];
console.log(names);
console.log(names.length);
console.log(names[3]);
names[4] ='psychoo';
console.log(names[4]);

//insert methods
names.push('edhk');
console.log(names);


//slicing
console.log(names.slice(0,2));
console.log(names.slice(3,5));

//splice-insert  value inside the array
let fruit =['apple','bada Apple','chota Apple','double App'];
fruit.splice(3,1,'karab Apple','meeta Apple');//use paranthesis
console.log(fruit);

//concatenation
let arr1=[1,2,3,4];
let arr2 =[5,6,7,8];
let arr3 =[9,10,11];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

//fill
let arr4 = [1,2,3,4,5,6];
arr4.fill('nithin',1,4);
console.log(arr4);

//include

let arr5 = [1,2,3,4,5,6,7];
console.log(arr5.includes(6,5));
console.log(arr5.includes(6,7));

//indexof
let arr6 = [1,2,3,4,5,6,7,'Nithin'];
console.log(arr6.indexOf('Nithin'));

//IsArray()
let num = [1,2,3,4];
let num1 = 2;
console.log(Array.isArray(num));
console.log(Array.isArray(num1));


//join
let arr7 =[1,2,3,4];
console.log(arr7.join(' pooja '));

//map
let maths = [1,4,9,16,25];
console.log(maths.map(Math.sqrt));

//reverse
console.log(maths.reverse());

//shift and pop
console.log(maths.pop());
console.log(maths.shift());

//converting to array
let name ='deyy';
let array = name.split('');
console.log(array);