const texto = "1,2,3,4,5,6,a.b c!d?e[f";

//console.log(texto.match(/[^\d]/g)); //Retorna sem números
//console.log(texto.match(/[\D]/g)); //Retorna sem números
//console.log(texto.match(/[^0-9]/g)); //Retorna sem números
//console.log(texto.match(/[^\d\.\!\?\[\s,]/g)); //Só retorna abcdef

const texto2 = "1: !\"#$%&'()*+,-./ 2: :;<==>?@";
console.log(texto2.match(/[^!-/:-@\s]/g));
