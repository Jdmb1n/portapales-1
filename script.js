function copiar(){
  var resultado= document.getElementById('resultado');
  var texto = document.querySelector('#texto');
  var rango = document.createRange();  
  rango.selectNode(texto);
  window.getSelection().removeAllRanges();  
  window.getSelection().addRange(rango); 

  try {  
    var successful = document.execCommand('copy');
    var mensaje = successful ? '¡Texto Copiado!' : 'No se pudo copiar :c';  
    resultado.innerHTML=mensaje;
    window.getSelection().removeAllRanges(); 
  } catch(e) {  
    resultado.innerHTML=mensaje;
  }  
};



function copiar2(){
  const resultado2 = document.getElementById('resultado2');
  const texto2 = document.querySelector('#texto2');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNode(texto2);
  selection.removeAllRanges();
  selection.addRange(range);
  
  try{
    var successful = document.execCommand('copy');
    var mensaje = successful ? '¡Texto Copiado!' : 'No se pudo copiar :c';  
    resultado2.innerHTML=mensaje;
    selection.removeAllRanges();
  }catch(e){
    resultado2.innerHTML=mensaje;
  }
}



function copiar3(){
  const caja = document.querySelector("#informacion");
  caja.select();
  document.execCommand('copy');
  //Remover seleccion
  //window.getSelection().removeAllRanges(); 
  //En un input si quitamos el focus por
  //consecuente se quita la seleccion asi que
  //se puede omitir el removeallranges
  caja.blur();
}