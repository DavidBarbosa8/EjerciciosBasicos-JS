function calcularDescuento(){

    let valorProducto = document.getElementById("valorProducto").value;
    let porcentajeDescuento = document.getElementById("porcentaje").value;;
    let descuento = (valorProducto - (valorProducto * (porcentajeDescuento/100)))

    document.getElementById("resultado").innerHTML = `El valor de tu producto con el descuento de ${porcentajeDescuento}% es de ${descuento} pesos`


}