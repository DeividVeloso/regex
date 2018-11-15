const text = `
Os email dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com.br
    - fulano+de+tal@escola.ninja.br
`;

console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));
