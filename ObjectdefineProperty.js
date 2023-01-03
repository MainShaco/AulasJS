function Professor (nome, idade, disciplina){
    this.nome = nome;
    this.idade = idade;

Object.defineProperty(this, 'disciplina',{
    enumerable: true, //true pra mostra a chave, false para não mostrar
    value: disciplina, //valor da chave
    writable: true, // true pra alterar, false pra não alterar
    configurable: true, // true para configurar, false para não configurar
});
Object.defineProperties(this, {
    nome: {
        enumerable: true,
        value: nome,
        writable: true,
        configurable: true,
    },
    idade: {
        enumerable: true,
        value: idade,
        writable: true,
        configurable: true,
    }
});
}

const p1 = new Professor('Joao', 30, 'Matematica');
p1.idade = '40';
console.table(p1);
