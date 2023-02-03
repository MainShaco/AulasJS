
function Produto (nome,preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) 
{this.preco = this.preco - (this.preco * (percentual / 100))};

Produto.prototype.aumento = function(percentual)
 {this.preco = this.preco + (this.preco * (percentual / 100))};

const p1 = new Produto('camisa', 30);
p1.aumento(20);

const p2 = {
    nome: 'Caneca',
    preco: 10
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(40);

const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 60
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    }
});
p3.aumento(50);
console.log(p3);