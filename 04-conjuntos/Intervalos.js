const texto = "1,2,3,4,5,6,a.b c!d?e[f";
console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[1-3A-Z]/gi));
