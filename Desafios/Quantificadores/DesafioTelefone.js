const texto = `Lista telefônica:
	- (11) 98756-1212
	-98765-4321`;
//Tráz com a formatacao
console.log(texto.match(/(\(\d{2}\)?\s?)?\d{5}\-\d{4}/g));
