/*const data = new Date('2022-07-02 18:23:40');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
*/


function adicionar0Esquerda (numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formatarData (data){
    const dia = adicionar0Esquerda(data.getDate());
    const mes = adicionar0Esquerda(data.getMonth());
    const ano = adicionar0Esquerda(data.getFullYear());
    const hora = adicionar0Esquerda(data.getHours());
    const min = adicionar0Esquerda(data.getMinutes());
    const sec = adicionar0Esquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${sec}`;
}

const data = new Date();
const Data = formatarData(data);
console.log(Data);