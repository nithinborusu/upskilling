//part 1
const object ={
    rocket:'fly',
    home :'stay',
}
console.log(object);
for(let i in object){
    console.log(object[i]);
}
//string, number, bigint, boolean, null, undefine, symbol are not objects
const obj1 ={
    rocket:'fly',
    fuel:2,
    config: {
        name : 'mars'
    }
}
obj1.fuel = 200;
obj1['year']=2000;
console.log(obj1);
console.log(obj1.config.name);


//part2
const  obj2 = new Object();
obj2.redbook ='📕';
obj2.myValue ='1 blue book';
console.log(obj2);

//part3
const powers ={
    fly: true,
    coordinate: Math.random()+2
}
const obj3 = Object.create(powers);
console.log(obj3);
console.log(obj3.coordinate);
console.log(Object.getPrototypeOf(obj3));


// part4
const obj4 = Object.create({});

Object.defineProperty(obj4,'book',{
    get: ()=> '📘',
    enumerable:true,

})
console.log(obj4);
console.log(obj4.book);
console.log(Object.getPrototypeOf(obj4));

for(k in obj4){
    console.log(k);
}

//part 5
const obj5 ={
    comics : 'marvel',
    pen:'',
    printComic: function(){
        this.pen += '🖊️🗒️',
        console.log(this);
         
    },
    
}
obj5.printComic();
