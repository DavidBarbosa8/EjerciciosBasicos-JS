function agregarCaracter(caracter){

    if (document.getElementById("pantalla").innerHTML === `0`){

        document.getElementById("pantalla").innerHTML === caracter
    }else {
        document.getElementById("pantalla").innerHTML += caracter
    }

}

function limpiar(){

    document.getElementById("pantalla").innerHTML =`0`
}

function calcular(){
try{
    let operacion = document.getElementById("pantalla")
    operacion.innerHTML = new Function(`return ${operacion.innerHTML}`)();//Esta nueva funcion reconoce los datos que imprime el usuario en la calculadora, y la funcion opera con ellos
}catch (error){
    document.getElementById("pantalla").innerHTML = "Error"
}

}