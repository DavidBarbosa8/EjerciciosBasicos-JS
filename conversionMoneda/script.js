const tasaDeCambio = 3864;
function convertir (){

    
    const pesos = document.getElementById("pesos").value;
    const dolares = pesos / tasaDeCambio;
    document.getElementById("resultado").innerHTML =`${pesos} pesos equivalen a ${dolares.toFixed(2)} dolares`

}

function conversion(){

    const dolares = document.getElementById("dolares").value;
    const pesosC = dolares * tasaDeCambio;
    document.getElementById("resultado2").innerHTML = `${dolares} dolares equivalen a ${pesosC} pesos colombianos`

}
