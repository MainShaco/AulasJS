const pessoas = [ 
    {id:3, nome:'Joao'},
    {id:1, nome:'Maria'},
    {id:2, nome: 'Ana'},
]
/*
const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
};
*/

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.table(novasPessoas.get(8));