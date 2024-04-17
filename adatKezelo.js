export function tablazatRendez(lista, irany) {
  lista.sort(function (e1, e2) {
    return e1.nev.toUpperCase() > e2.nev.toUpperCase() ? 1 * irany : -1 * irany;
  });

  return lista;
}
//szorgalmi hf tetszöleges szerint rendezni
function atalakit(szoveg) {}
export function szuresNevSzerint(lista, szurtSzoveg) {
  const szurtLISTA = lista.filter(function (elem) {
    return elem.nev.includes(szurtSzoveg);
  });
  return szurtLISTA;
}
export function sorTorles(lista, index) {
  lista.splice(index, 1);
  return lista;
}
export function korSzures(lista) {
  lista.sort(function (e1, e2) {
    console.log(e1, e2);
    return e1.kor > e2.kor;
  });
  return lista;
}
