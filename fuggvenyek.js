export function tablazatOsszealit(lista) {
  let txt = "";
  txt += `<table class='table table-striped'>`;
  //szorgalmi fejléc kulcsai is ciklussal írjuk ki
  txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
  lista.forEach((element, i) => {
    txt += `<tr>`;
    for (const key in element) {
      txt += `<td>${element[key]}</td>`;
    }
    txt += `<td id='${i} class='kuka'>🗑️</td>`;
    txt += `</tr>`;
  });
  txt += "</table>";
  return txt;
}
export function megjelenites(txt) {
  const adatokELEM = $(".adatok");
  adatokELEM.html(txt);
}
