function imc(){

    let altura = parseFloat (document.getElementById("altura").value);
    let peso = parseFloat (document.getElementById("peso").value);
    let imc = ((peso / (altura ** 2)).toFixed(2))

    if(imc < 18.5){
        
        document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Bajo de Peso`
    }
            
        else if (imc >= 18.5 && imc < 25){

            document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Normal`
        }

        else if (imc >= 25 && imc < 30){

            document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Sobrepeso`
        }

        else if (imc >= 30 && imc < 35){

            document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Obesidad Moderada`
        }

        else if (imc >= 35 && imc < 40){

            document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Obesidad Severa`
        }

        else if (imc >= 40)

            document.getElementById("resultado").innerHTML = `Su IMC es ${imc}, su estado actual es Obesidad Morbida`
        
        
    }
    function reset(){

        document.getElementById("altura").innerHTML = 0
        
    }