
//Função recursiva: Chamando ela mesma no Escopo
const funcao = (num)=>{
    console.log(num);
    if(num > 10) return;
    num++;
    funcao(num);
};
funcao(0);


/*Arrays splice
const nomes = ['Joao', 'Lima', 'Mei', 'Catia'];

nomes.splice(1,3);
console.log(nomes);
*/

/*
Concatenação de Arrays
const a1 = [{
    nome: 'Joao',
    idade: 12,
    naturalidade: 'Salvador'
}];
const a2 = [{
    nome: 'Maria',
    idade: 16,
    naturalidade: 'Sergipe'
}];
//const a3 = a1.concat(a2);
const a3 = [...a1, ...a2];
console.log(a3);*/

/*
//Função Construtora
function Aluno(nome,idade,naturalidade,cpf,matricula){
    this.nome = nome;
    this.idade = idade;
    this.naturalidade = naturalidade;
    this.cpf = cpf;
    this.matricula = matricula;
}
const aluno1 = new Aluno('Joao',13,'Salvador','999.111.222-32',20220988);
const aluno2 = new Aluno('Maria',15,'Lagarto','555.111.333-21',20226432);

console.log(aluno1);
console.log(aluno2);*/

