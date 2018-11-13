const aplicarCor = (text, reg, color) =>
  text.replace(reg, `<span style=color:#${color}><b>$1</b></span>`);

const file = require("./file");

const texto = file.read("codigoFonte.html");

const codeRegex = /<code>[\s\S]*.<\/code>/i;
let codigo = texto.match(codeRegex)[0];

//Strings ...
codigo = aplicarCor(codigo, /(\".*\")/g, "ce9178");

//Strings ...
codigo = aplicarCor(codigo, /(\".*\")/g, "ce9178");

console.log("ARQ", codigo);

const conteudoFinal = texto.replace(codeRegex, codigo);
file.write("codigoFonte.html", conteudoFinal);
