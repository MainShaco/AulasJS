const rand = (min, max) => Math.floor(Math.random() *(max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolo = '!@#$%&*()[]+-./';
const geraSimbolo = () => simbolo[rand(0, simbolo.length)];

export default function gerarSenha(qtd, maiusculas, minusculas, numeros, simbolo){
  const senhaArray = [];
  qtd = Number(qtd);

  for(let i=0; i<qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolo && senhaArray.push(geraSimbolo());
  }
  return senhaArray.join('').slice(0, qtd);
}