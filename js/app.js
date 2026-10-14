
var historicoPresupuestos = [];


function calcularPresupuesto() {

    // Pedimos los datos cada vez que se pulsa el botón.
    var horaTexto = prompt("Dime las horas estimadas");
    var tarifaTexto = prompt("Dime la tarifa por hora");

    

    let hora = parseInt(horaTexto);
    let tarifa = parseFloat(tarifaTexto);
    let subTotal = 0;

  

    // Calculamos el total aplicando el descuento.
    if (hora < 10) {
        subTotal = hora * tarifa;
    }
    else if (hora <= 30) {
        subTotal = (hora * tarifa) * 0.95;
    }
    else {
        subTotal = (hora * tarifa) * 0.90;
    }

    // Redondeamos a dos decimales.
    subTotal = Number(subTotal.toFixed(2));

    // Obtenemos la fecha actual.
    let fecha = new Date();

    // Creamos el objeto del presupuesto.
    let objeto = {
        horas: hora,
        tarifa: tarifa,
        total: subTotal,
        fecha: fecha
    };

    // Guardamos el objeto en el array.
    historicoPresupuestos.push(objeto);

    // Mostramos el presupuesto calculado.
    console.log("Presupuesto:", objeto);

    // Recorremos el histórico con forEach().
    console.log("HISTÓRICO DE PRESUPUESTOS");

    historicoPresupuestos.forEach(function(objeto) {
        console.log(
            "Horas: " + objeto.horas +
            " | Tarifa: " + objeto.tarifa.toFixed(2) + " €/h" +
            " | Total: " + objeto.total.toFixed(2) + " €" +
            " | Fecha: " + objeto.fecha
        );
    });

    alert("El total del presupuesto es: " +
        subTotal.toFixed(2) + " €");
}

// Asociamos el botón con la función.
document.getElementById("botonCalcular").addEventListener(
    "click",
    calcularPresupuesto,
    false
);
