/**
 * Question
 *16.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */

const month = prompt("enter the month");

if(month==='September' || month==='October' || month==='November'){
    alert('Autumn');
}
else if(month==='December' || month==='January' || month==='February') {
    alert('Winter');
}
else if(month==='March' || month==='April' || month==='May'){
    alert('Spring');
}
else if(month==='June' || month==='July' || month==='August'){
    alert('Summer');
}
