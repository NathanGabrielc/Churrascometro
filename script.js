// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml


let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao"); 

let resultado = document.getElementById("resultado");

function calcular() {

    console.log("Calculando...");

    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;

    let qdttotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdttotalbebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    let qdttotalcerveja = cervejaPP(duracao) * adultos;
    

    resultado.innerHTML = `<p>${qdttotalcarne / 1000}KG de Carne`
    resultado.innerHTML += `<p>${Math.ceil(qdttotalbebida / 2000)}Refrigerantes de 2L.`
    resultado.innerHTML += `<p>${Math.ceil (qdttotalcerveja / 355)}Latas de cerveja`
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650; 
    }else{
        return 400;
    }
}

function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500; 
    }else{
        return 1000;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000; 
    }else{
        return 1200;
    }
}
