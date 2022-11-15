//Primera pregunta

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

const boton = document.getElementById('responder');

boton.addEventListener('click', ()=>{

    puntaje = puntaje1+puntaje2+puntaje3+puntaje4+puntaje5+puntaje6+puntaje7+puntaje8+puntaje9+puntaje10;
    console.log(puntaje)
    
})





