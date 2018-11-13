const aplicarCor = (text, reg, color) =>
  text.replace(reg, `<span style=color:#${color}><b>$1</b></span>`);

const file = require("./file");

const texto = file.read("codigoFonte.html");

const codeRegex = /<code>[\s\S]*.<\/code>/i;
let codigo = texto.match(codeRegex)[0];

//Strings ...
codigo = aplicarCor(codigo, /(\".*\")/g, "ce9178");

//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, "d857cf");

// tipos...
codigo = aplicarCor(codigo, /\b(void|int|String)\b/g, "1385e2");

// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, "267703");

console.log("ARQ", codigo);

const conteudoFinal = texto.replace(codeRegex, codigo);
file.write("codigoFonte.html", conteudoFinal);
