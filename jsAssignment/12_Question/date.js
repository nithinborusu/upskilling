/*
Question

12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

let date = new Date();

const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear();
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');

//- YYYY-MM-DD HH:mm
console.log(`YYYY-MM-DD HH:mm\n${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`DD-MM-YYYY HH:mm\n${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`DD-MM-YYYY HH:mm\n${day}/${month}/${year} ${hours}:${minutes}`);

/**output: 
YYYY-MM-DD HH:mm
2024-04-29 15:41
DD-MM-YYYY HH:mm
29-04-2024 15:41
DD-MM-YYYY HH:mm
29/04/2024 15:41
 */