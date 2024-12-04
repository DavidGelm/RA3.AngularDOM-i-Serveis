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
