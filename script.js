const formulario = document.getElementById("formulario");

function hacerCalculos(){
    const valorTicket = 200;
    let selectCan = document.getElementById("cantidad").value;   
    let select = document.getElementById("seleccion"); 
    let selectedOption = select.options[select.selectedIndex].value;

    if(selectedOption == "estudiante"){
        let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 80 / 100);
        document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
    } else if(selectedOption == "trainee"){
        let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 50 / 100);
        document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
    } else if(selectedOption == "junior"){
            let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 15 / 100);
            document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
        }
    
} 

function borrar(){
    formulario.reset();
    document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $";

}

/*Agrega evento onclick al boton borrar*/
document.getElementById("boton-tickets-borrar").onclick = function(){ 
    borrar(); 
}

 /*Agrega evento onclick al boton resumen*/
document.getElementById("boton-tickets-resumen").onclick = function(){ 
    hacerCalculos(); 
}