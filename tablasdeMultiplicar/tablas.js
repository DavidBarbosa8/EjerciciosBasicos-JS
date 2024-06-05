function tabla(){
    let tabla = parseInt(document.getElementById("table").value)
    let result = 0
    document.getElementById("resultado").innerHTML = ""

    for (let i=1; i<=10; i++){

        result = tabla * i;
        document.getElementById("resultado").innerHTML += (`${tabla} * ${i} = ${result}<br>`); /*Se pone el signo += para que vaya acumulando
        y la etiqueta <br> para que vaya generando un salto de linea luego de cada ciclo*/
        
    }


}