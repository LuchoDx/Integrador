function hacerCalculos(){
    const valorTicket = 200;
     let selectCan = parseInt(document.getElementById("cantidad").value); 
     
    let select = document.getElementById("seleccion"); 
    let selectedOption = select.options[select.selectedIndex].value;

    if(selectedOption == "estudiante"){
        let resultado = valorTicket * selectCan;
        document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
    }
} 
 
document.getElementById("boton-tickets-resumen").onclick = function(){
   
    hacerCalculos();
    
}