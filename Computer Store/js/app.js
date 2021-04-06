//variables
document.getElementById("calcular").addEventListener("click", function() {

    var compra =  document.getElementById("compra")  ;
    var utilidad = document.getElementById("utilidad") ;
    var iva = document.getElementById("iva") ;
    var totalVenta = document.getElementById("totalVenta") ;
    var ganancia = document.getElementById("ganancia") ;

    var totalIva;
    var totalGanancia;

    //Calcular ganancia
    totalIva = (compra.value * iva.value)/100;
    totalGanancia = (compra.value * utilidad.value)/100;

    totalVenta.value = parseInt( totalIva) + parseInt(compra.value) + parseInt(totalGanancia);
    ganancia.value = totalGanancia;

  });

