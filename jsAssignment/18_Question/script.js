/** 18. Write a program which tells the number of days in a month, 
 * now consider leap year.
 * 
*/

const isLeapYear = function(year){
    if(year%4===0 || (year%100===0 && year%400===0)) return true;
    return false;
}
const Days = function(year,month){
    if(isLeapYear(year) && month===2){
        alert('29days');
        return;

    }
    if(month==2) alert('28 days');
    else if(month <=7 && month%2) {
        alert('31days');
    }
    else if(month<=7 && month%2===0){
        alert('30days');
    }
    else if(month >7 && month%2==0) {
        alert('31days');
    }
    else if(month>7 && month%2){
        alert('30days');
    }
    return;

}
const today = prompt("enter today date in format :YYYY-MM-DD");
const date = new Date(today);
const year = date.getFullYear();
const month = date.getMonth()+1;

console.log(year,month);
console.log(typeof(year),typeof(month));

Days(year , month);

/*
Output

2000-02-28
2000 2
number number
29

2022-08-20
2022 8
number number

31



*/