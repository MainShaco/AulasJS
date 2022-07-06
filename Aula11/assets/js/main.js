const paragrafo = document.querySelector('.paragraph');
const ps = document.querySelectorAll('p');

const estyloBody = getComputedStyle(document.body);
const backgroundBody = estyloBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = backgroundBody;
    p.style.color = '#FFFFFF';
}