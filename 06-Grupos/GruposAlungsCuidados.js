const texto = "Pedrinho (filho) é doutor do ABC";

console.log(texto.match(/[(abc)]/gi)); //Não é um grupo e sim um RANGE
console.log(texto.match(/([abc])/gi)); //É um grupo
console.log(texto.match(/(abc)/gi)); //Não precisa utilizar Grupo, evitar
