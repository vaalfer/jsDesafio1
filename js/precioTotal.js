let precioporunidad = 289000;
function calcularTotal() {
    let cantidad = document.getElementById("cantidadinp").value;
    let precioTotal = precioporunidad*cantidad;
    let color = document.getElementById("colorinp").value;
    csscolor = document.getElementById("colorfinal")
    csscolor.style.background = color;

    let totaltext = document.getElementById("totalfinal").innerHTML= `El total es: $${precioTotal}`
    let cant = document.getElementById("cantidadfinal").innerHTML = `La cantidad es: ${cantidad}`


}