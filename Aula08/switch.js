function getWeekDay(diaSemana) {
    let diaSemanaTexto;

switch (diaSemana) {

    case 0:
    diaSemanaTexto = 'Domingo'; 
    return diaSemanaTexto;

    case 1: 
    diaSemanaTexto = 'Segunda-feira';
    return diaSemanaTexto;

    case 2:
    diaSemanaTexto = 'Terça-feira';
    return diaSemanaTexto;

    case 3:
    diaSemanaTexto = 'Quarta-feira';
    return diaSemanaTexto;

    case 4:
    diaSemanaTexto = 'Quinta-feira';
    return diaSemanaTexto;

    case 5:
    diaSemanaTexto = 'Sexta-feira'; 
    return diaSemanaTexto;

    case 6:
    diaSemanaTexto = 'Sabado'; 
    return diaSemanaTexto;

    default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
}

}

/*
switch(diaSemana) {
    case 0: diaSemanaText = 'Domingo'; break;
    case 1: diaSemanaText = 'Segunda-feira'; break;
    case 2: diaSemanaText = 'Terça-feira'; break;
    case 3: diaSemanaText = 'Quarta-feira'; break;
    case 4: diaSemanaText = 'Quinta-feira'; break;
    case 5: diaSemanaText = 'Sexta-feira'; break;
    case 6: diaSemanaText = 'Sabado'; break;
    default: diaSemanaText = '';
}
*/

const data = new Date('2022-01-01 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getWeekDay(diaSemana);

console.log(diaSemana, diaSemanaTexto);