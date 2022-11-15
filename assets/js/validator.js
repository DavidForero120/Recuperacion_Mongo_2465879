//Prueba de Conocimiento

const first = document.querySelector('#grafo');
const second = document.querySelector('#second');
const tercero = document.querySelector('#datebd');
const four = document.querySelector('#componentes');
const five = document.querySelector('#bdnor');

console.log(first);

let puntaje = 0;

let puntaje1 =0, puntaje2=0, puntaje3=0, puntaje4=0, puntaje5=0, puntaje6=0, puntaje7=0, puntaje8=0, puntaje9=0, puntaje10 = 0;


first.addEventListener('change', ()=>{
    let valorOption = first.value;
    console.log(valorOption);

    let optionSelect = first.options[first.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje1= 10
        console.log(puntaje1)
    }else{
        console.log("Perdiste")
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    console.log(valorOption);

    let optionSelect = second.options[second.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje2= 10
        console.log(puntaje2)
    }else{
        console.log("Perdiste")
    }
})

tercero.addEventListener('change', ()=>{
    let valorOption = tercero.value;
    console.log(valorOption);

    let optionSelect = tercero.options[tercero.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje3= 10
        console.log(puntaje)
    }else{
        console.log("Perdiste")
    }
})

four.addEventListener('change', ()=>{
    let valorOption = four.value;
    console.log(valorOption);

    let optionSelect = four.options[four.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje4= 10
        console.log(puntaje)
    }else{
        console.log("Perdiste")
    }
})

five.addEventListener('change', ()=>{
    let valorOption = five.value;
    console.log(valorOption);

    let optionSelect = five.options[five.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==1){
        console.log("ganaste")
        puntaje5= 10
        console.log(puntaje)
    }else{
        console.log("Perdiste")
    }
})

//Practica

const pr1 = document.querySelector('#pr1');
const pr2 = document.querySelector('#pr2');
const pr3 = document.querySelector('#pr3');
const pr4 = document.querySelector('#pr4');
const pr5 = document.querySelector('#pr5');

pr1.addEventListener('change', ()=>{
    let valorOption = pr1.value;
    console.log(valorOption);

    let optionSelect = pr1.options[pr1.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==2 ){
        console.log("ganaste")
        puntaje6= 10
    }else{
        console.log("Perdiste")
    }
})

pr2.addEventListener('change', ()=>{
    let valorOption = pr2.value;
    console.log(valorOption);

    let optionSelect = pr2.options[pr2.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==4){
        console.log("ganaste")
        puntaje7= 10
    }else{
        console.log("Perdiste")
    }
})

pr3.addEventListener('change', ()=>{
    let valorOption = pr3.value;
    console.log(valorOption);

    let optionSelect = pr3.options[pr3.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==3){
        console.log("ganaste")
        puntaje8= 10
    }else{
        console.log("Perdiste")
    }
})

pr4.addEventListener('change', ()=>{
    let valorOption = pr4.value;
    console.log(valorOption);

    let optionSelect = pr4.options[pr4.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption ==4){
        console.log("ganaste")
        puntaje9= 10
    }else{
        console.log("Perdiste")
    }
})

pr5.addEventListener('change', ()=>{
    let valorOption = pr5.value;
    console.log(valorOption);

    let optionSelect = pr5.options[pr5.selectedIndex];

    console.log(`Opcion ${optionSelect.text}`);
    console.log(`Opcion ${optionSelect.value}`);

    if(valorOption == 3){
        console.log("ganaste")
        puntaje10= 10
    }else{
        console.log("Perdiste")
    }
})

const boton = document.getElementById('responder');

boton.addEventListener('click', ()=>{

    puntaje = puntaje1+puntaje2+puntaje3+puntaje4+puntaje5+puntaje6+puntaje7+puntaje8+puntaje9+puntaje10;
    console.log(puntaje)
    
})





