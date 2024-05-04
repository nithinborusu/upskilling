let myheros =["ironman","hulk","thor"]
let dcheros=["batman","superman"]

let heroPower={
    thor: 'hammer',
    hulk: 'strength',
    getThorPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}
Object.prototype.nithin = function(){
    console.log(`nithin is present in all objects`);
}
Array.prototype.heyNithin= function(){
    console.log(`nithin says fuck yourself`);
}

// myheros.nithin()

//inheritance through prototype

const User  ={
    name :'top name',
    email:'ehdt@mail',
}
const Teacher = {
    makeVidoes: true,
}
const TeachingSupport = {
    isAvaiable : false
}
const TsAssg ={
    makeAssg :'js',
    fullTime: true,
    __proto__ :TeachingSupport
}
Teacher.__proto__ = User;
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);


// goal: to get true length of a string
let name='pooja';
String.prototype.truelength = function(){
    console.log(`${this.trim().length}`);
}