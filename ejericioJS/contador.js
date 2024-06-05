let contador =0;

function incrementar() {
    
    contador = contador + 1;

    document.getElementById("contador").innerHTML = contador;
    
}

function reiniciar (){

    contador = 0;
    document.getElementById("contador").innerHTML = contador;
}

function disminuir() {

    contador = contador - 1;
    document.getElementById("contador").innerHTML = contador; /**/
    
}


