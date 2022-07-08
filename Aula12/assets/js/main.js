function relogio(){
    function getSeconds(second){
        const data = new Date(second * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    }
    
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;
    
    function startWatch(){
        timer = setInterval(function(){
            seconds++;
            relogio.innerHTML = getSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const element = e.target;
    
        if (element.classList.contains('start')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            startWatch();
        }
        if (element.classList.contains('pause')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (element.classList.contains('reset')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    })
} 
relogio();
