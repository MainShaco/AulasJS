import gerarSenha from "./Gera-senha";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumero = document.querySelector('.chk-numeros');
const chkSimbolo = document.querySelector('.chk-simbolos');
const btnGerar = document.querySelector('.gerar-senha');

export default () => {
  btnGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
    });
}

function gera(){
  const senha = gerarSenha(qtdCaracteres.value, chkMaiuscula.checked ,chkMinuscula.checked ,chkNumero.checked , chkSimbolo.checked);
  return senha || 'Selecione Alguma Opção';
}

