const formulario = document.getElementById("formulario");

/*se hacen los calculos correspondientes para que cada quien tenga su descuento correspondiente*/
function hacerCalculos(){

	// guardando en variables locales los datos del formulario.
    const valorTicket = 200;
    let selectCan = document.getElementById("cantidad").value;   
    let select = document.getElementById("seleccion"); 
    let selectedOption = select.options[select.selectedIndex].value;

	 //Validar que el campo cantidad no este vacio.
    if(selectCan !== ""){

	 //Validar que el valor ingresado en el campo cantidad no sea menor que 1 ni mayor que 10.
    if(selectCan > 0  &&  selectCan < 11){
	 
	 //Se aplican los descuentos segun categoria.
	 if(selectedOption == "estudiante"){
        let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 80 / 100);
        document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
    }
	 
	 else if(selectedOption == "trainee"){
        let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 50 / 100);
        document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
    }
	 else if(selectedOption == "junior"){
            let resultado = valorTicket * selectCan - ((valorTicket * selectCan) * 15 / 100);
            document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
        }
	else{
		let resultado = valorTicket * selectCan;
            document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $" + resultado;
	}

   }
	//Alerta si se ingresa un valor diferente al solicitado 
	else {
    alert("Debes ingresar un valor entre el 1 y el 10")
 }
	}
   //Alerta si no hay ningun valor en el campo cantidad.
	else{
    alert("Debes ingresar un valor en cantidad");
 }
}


/*Agrega evento onclick al boton borrar*/
document.getElementById("boton-tickets-borrar").onclick = function(){ 
      formulario.reset();
      document.getElementById("total-a-pagar").innerHTML = "Total a Pagar: $";
}

 /*Agrega evento onclick al boton resumen*/
document.getElementById("boton-tickets-resumen").onclick = function(){ 
    hacerCalculos(); 
}

 /*Agrega evento onclick al boton Comprar Tickets*/
 document.getElementById("botonComprarTickets").onclick = function(){ 
    location.hash = "#comprar-tickets";
}