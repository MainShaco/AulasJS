const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numerosDobrados = numeros.map(function (valor) { return valor * 2});
const numerosDivididos = numeros.map( valor => valor / 2 );
console.log(numerosDivididos);


const pessoas = [
    {nome: 'Joao', idade: 33},
    {nome: 'Ana', idade: 14},
    {nome:'Lucas', idade: 50},
    {nome: 'Bruna', idade: 60},
    {nome: 'Zezinho', idade: 40}
]

const nomes = pessoas.map(function (obj) { return obj.nome });
const idades = pessoas.map(  obj => (  {idade: obj.idade} ) );
//const idades = pessoas.map(function (obj) { delete obj.nome; return  obj});
const addId = pessoas.map(function (obj, indice) { const newObj = {...obj}; 
 newObj.id = indice; return newObj});
/* Alterando o Array original
const addId = pessoas.map(function (obj, indice) {  obj.id = indice; return obj});
*/