var puntos = 0;

const comienzo = document.getElementById('inicio');
const modal1 = document.getElementById('first');
comienzo.addEventListener('click',()=>{
      modal1.classList.replace('first','firstA');
      comienzo.classList.add('ini');
});
//class ini para ocultar botones
//class ani para mostrar botones
//message correct or incorrect
const res = document.getElementById('respuesta1');
/*result question 1 */
const q1 = document.getElementById('first_1');
q1.addEventListener('click',()=>{
      puntos = puntos + 10;
      res.innerHTML = "Respuesta Correcta"
      q1.classList.add('ini');
      q2.classList.add('ini');
      q3.classList.add('ini');
      q4.classList.add('ini');
      console.log(puntos);
      question2.classList.add('ani');
});
const q2 = document.getElementById('first_2');
q2.addEventListener('click',()=>{
      console.log('incorrecta');
      q1.classList.add('ini');
      q2.classList.add('ini');
      q3.classList.add('ini');
      q4.classList.add('ini');
      res.innerHTML = "Respuesta Incorrecta";
      question2.classList.add('ani');
});
const q3 = document.getElementById('first_3');
q3.addEventListener('click',()=>{
      console.log('incorrecta');
      q1.classList.add('ini');
      q2.classList.add('ini');
      q3.classList.add('ini');
      q4.classList.add('ini');
      res.innerHTML = "Respuesta Incorrecta";
      question2.classList.add('ani');
});
const q4 = document.getElementById('first_4');
q4.addEventListener('click',()=>{
      console.log('incorrecta');
      q1.classList.add('ini');
      q2.classList.add('ini');
      q3.classList.add('ini');
      q1.classList.add('ini');
      res.innerHTML = "Respuesta Incorrecta";
      question2.classList.add('ani');
});
/*----------------------second question ---------------------*/
const  question2 = document.getElementById('question2');
const modal2 = document.getElementById('second');
const option2 = document.getElementById('options2');

question2.addEventListener('click',()=>{
      question2.classList.add('ini');
      modal1.classList.replace('firstA','first');
      modal2.classList.replace('second','secondA');  
      
});

const closeo = document.getElementById('options2');

const res2= document.getElementById('respuesta2');

const s1 = document.getElementById('second1');
s1.addEventListener('click',()=>{
      closeo.classList.replace('options2','ini');
      res2.innerHTML = "Respuesta Incorrecta";
      question3.classList.add('ani') 
})
const s2 = document.getElementById('second2');
s2.addEventListener('click',()=>{
      closeo.classList.replace('options2','ini');
      res2.innerHTML = "Respuesta Incorrecta";
      question3.classList.add('ani') 
})
const s3 = document.getElementById('second3');
s3.addEventListener('click',()=>{
      puntos = puntos + 10;
      closeo.classList.replace('options2','ini');
      console.log(puntos);
      res2.innerHTML = "Respuesta correcta";
      question3.classList.add('ani') 
})
const s4 = document.getElementById('second4');
s4.addEventListener('click',()=>{
      closeo.classList.replace('options2','ini');
      res2.innerHTML = "Respuesta Incorrecta";
      question3.classList.add('ani') 
})
/*-----------------third question-------------------- */
const question3 = document.getElementById('question3');
const modal3 = document.getElementById('third');
const close2 = document.getElementById('options3');
const res3 = document.getElementById('respuesta3');
question3.addEventListener('click',()=>{
      modal2.classList.replace('secondA','second');
      modal3.classList.replace('third','thirdA');
      
});
const t1 = document.getElementById('third1');
t1.addEventListener('click',()=>{
      close2.classList.replace('options3','ini');
      res3.innerHTML="Respuesta Incorrecta";
      question4.classList.add('ani') 
})
const t2 = document.getElementById('third2');
t2.addEventListener('click',()=>{
      close2.classList.replace('options3','ini');
      puntos = puntos + 10;
      console.log(puntos)
      res3.innerHTML="Respuesta correcta"
      question4.classList.add('ani') 
})
const t3 = document.getElementById('third3');
t3.addEventListener('click',()=>{
      close2.classList.replace('options3','ini');
      res3.innerHTML="Respuesta Incorrecta"
      question4.classList.add('ani') 
})
const t4 = document.getElementById('third4');
t4.addEventListener('click',()=>{
      close2.classList.replace('options3','ini');
      res3.innerHTML="Respuesta Incorrecta"
      question4.classList.add('ani') 
})

/*------------------four question-----------------*/
const question4 = document.getElementById('question4');
const modal4 = document.getElementById('four');
question4.addEventListener('click', ()=>{
      modal3.classList.replace('thirdA','third');
      modal4.classList.replace('four','fourA');
})