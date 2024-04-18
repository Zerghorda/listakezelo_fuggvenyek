import { init } from "./main.js";
export function adatokListaba(lista) {
  let adat = {
    nev: "",
    kor: 0,
    nem: true,
  };

  const gombELEM = $("#gomb");

  gombELEM.on("click", function (event) {
    event.preventDefault();
    const nevELEM = $("#nev");
    const korELEM = $("#kor");
    const nemELEM = $("input[name='nem']:checked");
    adat = {
      nev: nevELEM.val(),
      kor: korELEM.val(),
      nem: nemELEM.val() === "false" ? false : true,
    };
  });
  const validELEMEK = $(".valid-feedback");
  console.log(validELEMEK.eq(0).css("display"));
  if (
    validELEMEK.eq(0).css("display") === "block" &&
    validELEMEK.eq(1).css("display") === "block"
  ) {
    lista.push(adat);
    init(lista);
  }
}
