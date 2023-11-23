function apostar(){
    // CALCULAR NUMERO APOSTADO DEL 1 AL 10
    var a=Math.round(Math.random()*10); 
    // TRANSFERENCIA DE VALOR a DE JS AL FORMULARIO
    document.getElementById("resultado").value=a;
    // TRANSFERENCIA DE FORMULARIO AL JS
    var b=document.getElementById("apostado").value;
    // CALCULAR RESULTADO
    if (a==b){
        document.getElementById("salida").value="GANÓ";
    }else{
        document.getElementById("salida").value="PERDIÓ";
    }
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}