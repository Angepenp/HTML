var turno=['F01','P01','Q01','M01','F02','P02'];
var modulo=['01','02','03','04','05','06'];

function tick(){
    let con=1; //longitud
    let ce=0; //indice
    while (con<=6){
        document.getElementById("t"+con).value=turno[ce];
        document.getElementById("m"+con).value=modulo[ce];
        ++ce;
        ++con;
    }
}