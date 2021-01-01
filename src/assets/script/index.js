console.log(`JavaScript funcionando`);

document.getElementById("vermas").onclick=vermas;
document.getElementById("vermenos").onclick=vermenos;

function vermas(){
    console.log("Leer más");
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("vermas").style.display = "none";
}

function vermenos(){
    console.log("Leer menos");
    document.getElementById("abrir").style.display = "none";
    document.getElementById("vermas").style.display = "inline";
}






