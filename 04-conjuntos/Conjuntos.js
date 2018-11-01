const texto = "1,2,3,4,5,6,a.b c!d?e[f";

const regexPares = /0|2|4|6|8/g;
//const regexPares = /02468/g;
console.log(texto.match(regexPares));

const regexComESemAcento = /n[aã]./g;
const texto2 = "João não vai andar na moto.";
console.log(texto2.match(regexComESemAcento));
