
/**19. Create a countries.js file and 
 * store the countries name into this file,
 *  create a file web_techs.js and 
 * store the popular web technology names into this file.
 *  Access both file in a third file named main.js
 */
const countries = require("./countries");
const tech = require("./web_techs");

console.log(`

Contents in countries.js file are:\n
${countries.asianCountries}\n
${countries.europeanCountries}\n
${countries.americanCountries}\n
${countries.africanCountries}

`)
console.log(
    `
    Contents in technologies.js file are \n
    ${tech.webTechs}
    `
);

/** output:
Contents in countries.js file are:

India,SriLanka,China,Japan,South-Korea,Singapore,Thailand,Bangladesh,Pakisthan

UK,Germany,Scotland,Findland,Swedan,IreLand

[object Object]

South Africa,Nigeria,Egypt,Kenya

Contents in technologies.js file are 

JavaScript,HTML,CSS,React,Angular
*/