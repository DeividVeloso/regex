const texto = `CPF dos aprovados:
	- 600.567.890-12
	- 765.998.345-23`;
//Tráz com a formatacao
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

//Remove os . e - e tráz só números
const texto2 = texto.replace(/\.|\-/g, "");
console.log(texto2.match(/\d{11}/g));
