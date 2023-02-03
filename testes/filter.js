//Filter em Arrays
// Filter vai sempre returnar uma array com a mesma quantidade de elementos ou menos do array original
const numeros = [10,2,50,3,20,1,40,12,33,9];
const numFiltrado = numeros.filter(  valor => valor > 10 );
/*
function filtrarNum(valor) {
  
  Forma iniciante
    if (valor>10) {
        return true;
    } else{
        return false;
    } 
    
  Forma simples
   return valor > 10;               
}*/ 

const pessoas = [
    {nome: 'Joao', idade: 33},
    {nome: 'Ana', idade: 14},
    {nome:'Lucas', idade: 50},
    {nome: 'Bruna', idade: 60},
    {nome: 'Zezinho', idade: 40}
]
const pessoasFiltradas = pessoas.filter(function (obj) {return obj.nome.length > 5});
const idadePessoas = pessoas.filter( obj => obj.idade < 40);
const nomeFinalA = pessoas.filter(function (obj) { return obj.nome.toLowerCase().endsWith('a')});
const nomeFinalA2 = pessoas.filter( obj => obj.nome.substr(-1) === 'a');

console.log(pessoasFiltradas);
console.table(pessoasFiltradas);
