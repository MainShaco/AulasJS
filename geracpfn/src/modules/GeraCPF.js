import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    // Gera digitos
    const digitos = String(Math.floor(Math.random() * (max - min) + min));
 
    // Percorre cada digito checando se o digito atual é igual ao
    // primeiro digito e retorna um array com os digitos iguais. 
    const sequencia = Array.from(digitos).filter(numero => {
      return digitos[0] === numero;
    });
    
    // Se a quantidade de caracteres na sequência for igual a quantidade de 
    // de caracteres nos digitos, executa essa função novamente gerando novos
    // digitos 
    if (sequencia.length === digitos.length) return this.rand();
 
    return digitos;
  }

  formatado(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf);
  }
}
