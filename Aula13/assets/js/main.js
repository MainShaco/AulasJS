const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi (){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(event){
   if (event.keyCode === 13){
     if (!inputTarefa.value) return;
     criarTarefa(inputTarefa.value);
   }
});


function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criarTarefa(texto) {
   const li = criarLi();
   li.innerText = texto;
   tarefas.appendChild(li);
   limparInput();
   criarBotaoApagar(li);
   salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
})

document.addEventListener('click', function(event){
    const el = event.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    salvarTarefas();
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}
addTarefasSalvas();