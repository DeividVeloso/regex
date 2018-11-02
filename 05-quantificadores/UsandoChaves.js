const texto = "O João recebeu 120 milhões apostando 6 9 21 23 45 46";

//No futuro
console.log(texto.match(/\b\d{1,2}\b/g)); // Só números inteiros, que não tenham sido pegos no meio de frases
console.log(texto.match(/\b[\wãõ]{7}\b/g)); //Só paf=lavras interias com comeco e fim

//para definir um quantificador usa {}

//console.log(texto.match(/\d{1,2}/g)); //Pega números que contenham 1 ou dois caracteres.
//console.log(texto.match(/[0-9]{2}/g)); //Pega só números em dezena
//console.log(texto.match(/\d{1,}/g)); //Pega todos os números que tenha um ou mais caracteres

//Palavras
//console.log(texto.match(/\w{7}/g));
//console.log(texto.match(/[\wãõ]{7,}/g));
