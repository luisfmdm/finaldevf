function saludo (){
  var letras = ["A","B","C","D","E","F","G","H","I","J","K","L"]
  var print = '';
  for (var i = 0; i < letras.length; i++) {
    for (var j = 0; j < letras[i].length; j++) {
      print += '<div class="caja">'+ letras [i]+ '</div>'
    }
    console.log(letras[i]);
    document.getElementById('display').innerHTML = print;
  }
}
function Hola (){
  var saludar = ["HOLA!!!"]
  var print = '';
  for (var i = 0; i < saludar.length; i++) {
      print ='<H1>'+saludar [i]+'</h2>'
    console.log(saludar[i]);
    document.getElementById('display').innerHTML = print;
  }
}
