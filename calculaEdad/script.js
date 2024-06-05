function calcularEdad(){
    
    const anioActual = new Date().getFullYear();  /*get fullyear trae el dato del año actual*/
    const mesActual = new Date().getMonth();    /*getmonth trae el mes actual */
    const añoUsuario = document.getElementById("anioNacimiento").value;
    const edad = anioActual - añoUsuario;
    document.getElementById("resultado").innerHTML = `Tu edad es ${edad} años, ${mesActual} meses`
    /*Falta hacer el calculo para los meses*/
}