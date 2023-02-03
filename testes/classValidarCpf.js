class ValidarCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
         writable: true,
         enumerable: false,
         configurable: false,
         value: cpfEnviado.replace(/\D+/g, "")
        });
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const CpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidarCpf.geraDigito(CpfSemDigito);
        const digito2 = ValidarCpf.geraDigito(CpfSemDigito + digito1);
        
        this.NovoCpf = CpfSemDigito + digito1 + digito2;
    }

    static geraDigito(CpfSemDigito){
        let total = 0;
        let reverso = CpfSemDigito.length +1;

        for (let num of CpfSemDigito){
            total += reverso * Number(num)
            reverso--;
        }
        const digito = 11 - (total %11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();

        return this.NovoCpf === this.cpfLimpo;
    }
}
let teste = new ValidarCpf('068.953.785-96');
console.log(teste.valida());