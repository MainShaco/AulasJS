function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random()*(max-min) + min);
}

function Promessa(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

  Promessa('Conexao com o BD', rand(1, 5)).then(resposta =>{ 
    console.log(resposta);
    return Promessa('Buscando na BD', rand(1, 5))}).then(resposta => {
        console.log(resposta);
        return Promessa('Tratando os dados da Base', rand(1, 5))}).then(resposta => {
            console.log(resposta);
  }).then(()=>{
    console.log('Exibe os dados na tela');
  }).catch();