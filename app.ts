//lower case
let personName: string ="arish";
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("Uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));