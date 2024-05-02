/**
 * The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a,b)=> a-b);
console.log(ages);
const [min,max] =[ages[0],...ages.slice(9)];
console.log(`
Max Element : ${max}\n
Min Element: ${min}
`);

let size = ages.length;
if(size%2===0){
    console.log(`Median is ${(ages[size/2]+ages[(size/2) -1])/2}`);
}
else{
    console.log(`Median is ${ages[size/2]}`);
}
const sum =(ages)=>{
    let s=0;
    for(ele of ages) s+=ele;
    return s;
}
const avg = sum(ages)/size;
console.log(`Average of Ages is :${avg}`);
console.log(`Range of ages ${max- min}`);

if(Math.abs(min-avg)> Math.abs(max-avg)){
    console.log('Min avg is greater');
}
else if(Math.abs(min-avg) < Math.abs(max-avg)){
    console.log('Max avg is greater');
}
else{
    console.log('Both are Equal');
}


/**
 Output

 [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
]

Max Element :26

Min Element :19

Medain is 24
Average Of Ages is 22.8
Range of Ages 7
Min average is greater
 */