alert('Olá mundo');

function calculo() {
    var nota01 = parseFloat(document.getElementById('nota1').value);
    var nota02 = parseFloat(document.getElementById('nota2').value);
    var nota03 = parseFloat(document.getElementById('nota3').value);
    var nota04 = parseFloat(document.getElementById('nota4').value);
    var resultado = parseFloat((nota01 + nota02 + nota03 + nota04) / 4);
    document.getElementById('txtResultado').setAttribute("value", resultado);
}