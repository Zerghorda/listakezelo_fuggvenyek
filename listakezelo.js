import { emberLista } from "./adat";

const FERFIAK = emberLista.filter(function (ember) {
  return !ember.nem;
});
const FIATALOK = emberLista.filter(function (ember) {
  return ember.kor < 20;
});
emberLista.sort(function (e1, e2) {
  console.log(e1.kor, e2.kor, e1.kor - e2.kor);
  return e2.kor - e1.kor;
});
const FIATALFERFI = emberLista(function (ember) {
  return ember.kor < 20 && !ember.nem;
});
