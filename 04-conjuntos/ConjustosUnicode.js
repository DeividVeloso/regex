const texto = "Oi Deivid lindo áéíóú âêîôû ãõ ç àèìòù";

console.log(texto.match(/[Á-ú]/g)); //Pega só a frase sem acento
console.log(texto.match(/[\wÁ-ú]/g)); //Pega tudo
