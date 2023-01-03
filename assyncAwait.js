function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random()*(max-min) + min);
}

function Promessa(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('Cai no erro');
                return;
            }

        resolve(msg.toUpperCase()+ ' - Passei na promise');
     return;
    }, tempo);
}); 
}

async function executar(){
    try{ 
    const fase1 = await Promessa('Teste 1', rand(0,3));
    console.log(fase1);
    const fase2 = await Promessa('Teste 2', rand(0,3));
    console.log(fase2);
    const fase3 = await Promessa(6, rand(0,3));
    console.log(fase3);
    const fase4 = await Promessa('Teste 4', rand(0,3));
    console.log(fase4);

    console.log('Teste finalizado:', fase4);
    }catch(e) {
       console.log(e);}
}

executar();