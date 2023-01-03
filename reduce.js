const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const total =  numeros.reduce(function (acumulador,valor) {
    if (valor %2 ===0) {
        acumulador += valor;
    }
    return acumulador;
},0);
//console.log(total);

const pessoas = [
    {nome: 'joao', idade:20},
    {nome: 'lucas', idade:30},
    {nome: 'marca', idade:40},
    {nome: 'marcia', idade:50},
    {nome: 'marzo', idade:60}
]
const pessoaVelha= pessoas.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.table(pessoaVelha);