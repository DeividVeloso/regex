const texto2 = "http://www.site.com.br www.escola.ninja.br google.com.br";
console.log(texto2.match(/(\w+\:\/\/+)?(\w{3}\.)?(\w+)\.?(\w+)\.?(\w+)/g));
