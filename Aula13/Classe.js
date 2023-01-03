class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${nome} está falando`)
    }
    comer(){
        console.log(`${nome} esta comendo`)
    }
}
const p1 = new Pessoa();
p1.nome = "Joao";
p1.sobrenome = "Santos";
p1.falar();
console.log(p1);