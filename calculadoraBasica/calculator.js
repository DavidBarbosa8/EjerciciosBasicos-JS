function calculadora(){

    let operador1 = parseInt(document.getElementById("numero1").value);
    let operador2 = parseInt(document.getElementById("numero2").value);
    let operador = document.getElementById("operacion").value;
    let resultado = 0;

    if (operador === "suma"){
        resultado = operador1 + operador2;
        document.getElementById("resultado").innerHTML = `El resultado de la suma es ${resultado}`
        }

        else if (operador ==="resta"){
            resultado = operador1 - operador2;
            document.getElementById("resultado").innerHTML = `El resultado de la resta es ${resultado}`
            }

        else if (operador === "multiplicacion"){

            resultado = operador1 * operador2;
            document.getElementById("resultado").innerHTML = `El resultado de la multiplicacion es ${resultado}`
        
        }

        else if (operador === "division"){
            resultado = operador1 / operador2;
            document.getElementById("resultado").innerHTML = `El resultado de la division es ${resultado.toFixed(2)}`
        }

    }

    function Reset(){
        document.getElementById("resultado").innerHTML = ``
        document.getElementById("numero1")
        document.getElementById("numero2")
    }
