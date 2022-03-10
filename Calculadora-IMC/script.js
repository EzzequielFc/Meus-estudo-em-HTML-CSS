
let resultado = document.getElementById('res');

function calcular(){

    let nome = document.getElementById('lbl-nome');
    let altura = document.getElementById('lbl-altura');
    let peso = document.getElementById('lbl-peso');

    if(nome.value === ''){
        alert('Preencha um nome');
    }else if(altura.value === ''){
        alert('Preencha uma altura');
    }else if(peso.value == ''){
        alert('Preencha com uma peso');
    }else{
        const IMC = (peso.value / (altura.value * altura.value));
        resultado.innerHTML = `Olá ${nome.value}, o seu IMC é de: ${IMC}`;
    }

}