const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11)2511-2902
    - 5789-0980
    - (85)95687-0989
    - (1) 6355-9389
`;

console.log(texto.match(/(\(\d{1,2}\)\s?)?\d{4,5}-\d{4}/g));
