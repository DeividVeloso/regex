const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

//console.log(texto.match(/\d/g)); // pega os números
//console.log(texto.match(/\D/g)); // pega tudo que for diferente de números

//console.log(texto.match(/\w/g)); // [a-zA-Z0-9_]
//console.log(texto.match(/\W/g)); // [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)); // espacos
console.log(texto.match(/\S/g)); // ^espacos
