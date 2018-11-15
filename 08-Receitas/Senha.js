const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
abc@123ABC
`;

//Inicia com qualquer coisa e termina de 6 a 20 caracteres
console.log(texto.match(/^.{6,20}$/gm));
//Ele inicia com qualquer coisa sequido de uma letra Maiuscula de A-Z e termina com de 6 a 20
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));
//Inicia com qualquer coisa seguido de A-Z maiusculas
//Qualquer coisa seguido de a-z minisculo
//Qualquer coisa seguido com digitos
//Qualquer coisa seguido com caracteres especias
//Qualquer coisa seguido de 6 a 20
console.log(
  texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm)
);
