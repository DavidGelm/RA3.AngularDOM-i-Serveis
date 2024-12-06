export function yellowSubmarine(nom_id){
  document.getElementById(nom_id).style.color = 'yellow';
}
export function changeSize(height,width,taulaId){
  const taula= document.getElementById(taulaId);
  const files = taula.rows;

  for (let i = 0; i < files.length; i++) {
    files[i].style.height = height;
  }


  for (let i = 0; i < files[0].cells.length; i++) {
    for (let j = 0; j < files.length; j++) {
      files[j].cells[i].style.width = width;
    }
  }
}

export function countWords(lorem){
  const paragraphElement = document.getElementById(lorem);
  return paragraphElement ? paragraphElement.innerText.trim().split(/\s+/).length : 0;
}

export function mostrarllista(text,mostrar){
  var llistacont = document.getElementById(text)

  var resultat = ""
  var nOpcio = 1
  var primer = true
  var cont = false
  for (var i = 0; i < llistacont.innerHTML.length; i++) {
    if (llistacont.innerHTML.charAt(i) === '>' || llistacont.innerHTML.charAt(i) === '<') {
      if (cont !== 3) {
        cont++
      }
      else{
        cont = 0
        resultat += "   "
        primer = true
      }
    }
    else if (cont === 2) {
      if (primer === true) {
        resultat += " opcio "+nOpcio+":  "
        nOpcio++
        primer = false
        resultat += llistacont.innerHTML.charAt(i)
      }
      else {
        resultat += llistacont.innerHTML.charAt(i)
      }
    }

  }

  document.getElementById(mostrar).innerHTML = resultat;


}
