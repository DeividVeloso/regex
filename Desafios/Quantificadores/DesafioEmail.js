const texto = `Os e-mails dos convidados são:
	- fulano@cod3r.com.br
	- xico@gmail.com`;
//Tráz com a formatacao
console.log(texto.match(/\w{1,}@\w{1,}\.(\w{3}|\w{2})?.(\w{3}|\w{2})/g));
9;
