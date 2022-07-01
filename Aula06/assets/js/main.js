const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura){
        setResultado('Altura invalida', false);
        return;
    }
    
    const imc = calcularIMC(peso, altura);
    const nivelIMC = obterNivelIMC(imc);
    const msg = `Seu IMC e ${imc} (${nivelIMC})`;

    setResultado(msg,true);

    function obterNivelIMC (imc){
        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];

    }
});

function calcularIMC (peso, altura) {
    const calculo = peso / (altura * altura);
    return calculo.toFixed(2);
}

function criarP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();
    
    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('erro');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
}

