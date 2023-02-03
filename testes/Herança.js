class AparelhoEletronico{
    constructor(nome, ligar){
        this.nome = nome;
        this.ligado = false;
    }
    ligarAparelho(){
        if(this.ligado){ 
        console.log(this.nome + ' esta ligado');
       return; }
      this.ligado = true;
    }


    desligarAparelho(){
        if(!this.ligado){
            console.log(this.nome + ' ja esta desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends AparelhoEletronico{
    constructor(nome,cor,modelo){ 
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
    }
}
const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy X')
s1.ligarAparelho();
s1.ligarAparelho();
s1.desligarAparelho();
s1.desligarAparelho();


console.table(s1);