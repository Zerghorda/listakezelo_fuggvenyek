export function tablazatRendez(lista, irany) {
  lista.sort(function (e1, e2) {
    return e1.nev.toUpperCase() > e2.nev.toUpperCase() ? 1 * irany : -1 * irany;
  });

  return lista;
}
//szorgalmi hf tetszöleges szerint rendezni
function atalakit(szoveg) {}
