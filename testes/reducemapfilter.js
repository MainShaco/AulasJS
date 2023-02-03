const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,];
const mapfilterreduce = 
numeros.filter(valor => valor %2 ===0)
       .map(valor =>valor *2)
       .reduce((acumulador,valor) => acumulador + valor
);

//console.log(mapfilterreduce);

const pessoas = [
       {nome: 'Joao', idade: 33},
       {nome: 'Lucas', idade: 34},
       {nome: 'Ana', idade: 35},
       {nome: 'Maria', idade: 36}
]
const mapFilterReduce = pessoas.filter(valor => valor.idade %2 === 1)
.map(valor => valor.idade * 3)
.reduce((acumulador, valor) =>
acumulador + valor)

console.log(mapFilterReduce);