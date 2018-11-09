const text = "João é calmo, mas no transito fica nervoso.";

console.log(text.match(/[\wÀ-ú]+/g));

// //Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/g));
console.log(text.match(/[\wÀ-ú]+(?=\.)/g));
console.log(text.match(/[\wÀ-ú]+(?=, mas)/g));

//Negative lookahead
console.log(text.match(/[\wÀ-ú]+\b(?!,)/g));
console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/g));
