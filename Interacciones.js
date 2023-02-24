//VARIABLES DE LA SUMA
var resultadoAleatorio1_Suma = document.getElementById("numero_1_Suma");
var resultadoAleatorio2_Suma = document.getElementById("numero_2_Suma");
var numeroRespuesta_Suma = document.getElementById("numero_resultado_Suma");

// VARIABLES DE LA RESTA
var resultadoAleatorio1_Resta;
var resultadoAleatorio2_Resta;
var numeroRespuesta_Resta = document.getElementById("numero_resultado_Resta");

//VARIABLES DE LA MULTIPLICACION
var resultadoAleatorio1_Multiplicacion = document.getElementById("numero_1_Multiplicacion");
var resultadoAleatorio2_Multiplicacion = document.getElementById("numero_2_Multiplicacion");
var numeroRespuesta_Multiplicacion = document.getElementById("numero_resultado_Multiplicacion");

//VARIABLES DE LA DIVISION
var resultadoAleatorio1_Division = document.getElementById("numero_1_Division");
var resultadoAleatorio2_Division = document.getElementById("numero_2_Division");
var numeroRespuesta_Division = document.getElementById("numero_resultado_Division");

const cuadro1 = document.getElementById("form1");
const cuadro2 = document.getElementById("form2");
const cuadro3 = document.getElementById("form3");
const cuadro4 = document.getElementById("form4");
const botonSiguiente = document.getElementById("siguiente");


var formPresente = [1, 2, 3, 4];

var vidas = 3;
var vidaActual;

var score = 0;
var scoreInput = document.getElementById("score");


document.getElementById("boton_iniciar").addEventListener("click", numeroAleatorio);
document.getElementById("comprobar").addEventListener("click", comprobarResultado);
document.getElementById("contador").value = "x" + vidas;

window.addEventListener("load", nivelSiguiente);

// var alternativo; 
// function generarAlternativo(){
//    
// }

// function ahorasi(){

//     var alternativo; 
//     generarAlternativo();
//     nivelSiguiente();
// }


// botonSiguiente.addEventListener("click", ahorasi);


 function nivelSiguiente(){
    let alternativo = formPresente[Math.floor(Math.random()*formPresente.length)];
    switch(alternativo){
        case 1: cuadro1.classList.remove("formularioSecundario");
                cuadro2.classList.add("formularioSecundario");
                cuadro3.classList.add("formularioSecundario");
                cuadro4.classList.add("formularioSecundario");
                break;
       
        case 2: cuadro2.classList.remove("formularioSecundario");
                cuadro1.classList.add("formularioSecundario");
                cuadro3.classList.add("formularioSecundario");
                cuadro4.classList.add("formularioSecundario");
                break;
        
        case 3: cuadro3.classList.remove("formularioSecundario");
                cuadro1.classList.add("formularioSecundario");
                cuadro2.classList.add("formularioSecundario");
                cuadro4.classList.add("formularioSecundario");
                break;
        
        case 4: cuadro4.classList.remove("formularioSecundario");
                cuadro1.classList.add("formularioSecundario");
                cuadro2.classList.add("formularioSecundario");
                cuadro3.classList.add("formularioSecundario");
                break;
    }
 }



function numeroAleatorio(){
    document.getElementById("comprobar").disabled=false;
    switch(alternativo){
        case 1: document.getElementById("numero_resultado_Suma").disabled=false;
                resultadoAleatorio1_Suma.value= Math.floor(Math.random()*20 + 1);
                resultadoAleatorio2_Suma.value= Math.floor(Math.random()*20 + 1);
                break;
        
        case 2: document.getElementById("numero_resultado_Resta").disabled=false;
                resultadoAleatorio1_Resta = Math.floor(Math.random()*20 + 1);
                resultadoAleatorio2_Resta = Math.floor(Math.random()*20 + 1);
                if(resultadoAleatorio1_Resta > resultadoAleatorio2_Resta){
                    document.getElementById("numero_1_Resta").value = resultadoAleatorio1_Resta;
                    document.getElementById("numero_2_Resta").value = resultadoAleatorio2_Resta;
                    return;
                }
                else{
                    document.getElementById("numero_2_Resta").value = resultadoAleatorio1_Resta;
                    document.getElementById("numero_1_Resta").value = resultadoAleatorio2_Resta;
                    return;
                }
                break;
        case 3: document.getElementById("numero_resultado_Multiplicacion").disabled=false;
                resultadoAleatorio1_Multiplicacion.value= Math.floor(Math.random()*10 + 1);
                resultadoAleatorio2_Multiplicacion.value= Math.floor(Math.random()*10 + 1);
                break;
        case 4: document.getElementById("numero_resultado_Division").disabled=false;
            const divisores = [nd1 = parseInt(Math.ceil(Math.random()*9 + 1)), nd2 = parseInt(Math.ceil(Math.random()*9 + 1))];            
            const divisor = divisores[0];
            const residuo = divisores[1];

            const dividiendo = divisor * residuo;
            resultadoAleatorio1_Division.value = dividiendo;
            resultadoAleatorio2_Division.value= divisor; 
                break;

    }
}

function comprobarResultado(){
    switch(alternativo){
        case 1: var operacion_Suma = parseInt(resultadoAleatorio1_Suma.value) + parseInt(resultadoAleatorio2_Suma.value);
                var respuesta_Suma = parseInt(numeroRespuesta_Suma.value);
    
                if(respuesta_Suma == operacion_Suma){
                    alert("Respuesta correcta :)");
                    document.getElementById("siguiente").style.display="block";
                    formPresente++;
                    score = score + 10;
                    scoreInput.value = score;
                    nivelSiguiente();
                    // botonSiguiente.style.display="flex"
                    return;
                }
                else{
                    alert("Respuesta incorrecta :(");
                    vidas--;
                    document.getElementById("contador").value = 'x' + vidas;
                    if(vidas == 0){
                        alert("Ya no tienes vidas :(");
                        document.getElementById("comprobar").disabled=true;
                        document.getElementById("reiniciar").style.display="flex";
                    }
                    return;
                }
        case 2: var operacion_Resta = parseInt(document.getElementById("numero_1_Resta").value) -  parseInt(document.getElementById("numero_2_Resta").value);
                var respuesta_Resta = parseInt(numeroRespuesta_Resta.value);
    
                if(respuesta_Resta == operacion_Resta){
                    alert("Respuesta correcta :)");
                    document.getElementById("siguiente").style.display="block";
                    formPresente++;
                    score = score + 10;
                    scoreInput.value = score;
                    // botonSiguiente.style.display="flex"
                    nivelSiguiente();
                    return;
                }
                else{
                    alert("Respuesta incorrecta :(");
                    vidas--;
                    document.getElementById("contador").value = 'x' + vidas;
                    if(vidas == 0){
                        alert("Ya no tienes vidas :(");
                        document.getElementById("comprobar").disabled=true;
                        document.getElementById("reiniciar").style.display="flex";
                    }
                    return;
                }
        case 3: var operacion_Multiplicacion = parseInt(resultadoAleatorio1_Multiplicacion.value) * parseInt(resultadoAleatorio2_Multiplicacion.value);
                var respuesta_Multiplicacion = parseInt(numeroRespuesta_Multiplicacion.value);
    
                if(respuesta_Multiplicacion == operacion_Multiplicacion){
                    alert("Respuesta correcta :)");
                    document.getElementById("siguiente").style.display="block";
                    formPresente++;
                    score = score + 10;
                    scoreInput.value = score;
                    // botonSiguiente.style.display="flex"
                    nivelSiguiente();
                    return;
                }
                else{
                    alert("Respuesta incorrecta :(");
                    vidas--;
                    document.getElementById("contador").value = 'x' + vidas;
                    if(vidas == 0){
                        alert("Ya no tienes vidas :(");
                        document.getElementById("comprobar").disabled=true;
                        document.getElementById("reiniciar").style.display="flex";
                    }
                    return;
                }
        case 4: let resultado = resultadoAleatorio1_Division.value / resultadoAleatorio2_Division.value;
                let operacion = parseInt(numeroRespuesta_Division.value);
    
                if(resultado == operacion){
                    alert("Respuesta correcta :)");
                    document.getElementById("siguiente").style.display="block";
                    formPresente++;
                    score = score + 10;
                    scoreInput.value = score;
                    // botonSiguiente.style.display="flex"
                    nivelSiguiente();
                    return;
                }
                else{
                    alert("Respuesta incorrecta :(");
                    vidas--;
                    document.getElementById("contador").value = 'x' + vidas;
                    if(vidas == 0){
                        alert("Ya no tienes vidas :(");
                        document.getElementById("comprobar").disabled=true;
                        document.getElementById("reiniciar").style.display="flex";
                        return;
                    }
                }
    }
}

