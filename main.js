import { emberLista } from "./adat.js";
/*jelenítsuk meg az adatokat egy táblázatba az 
adatok div be,az urlap div-ben legyen egy úrlap,amivel adatokat tudunk
a táblázatba beletenni 

1.táblázat fejlécére kattintva akkor a mező szerint tudjunk rendezni
2.tudjunk törölni a táblázat adott sort
3.legyen egy szűrúmező ahová írhat szavakat ,szűrunk név szerint

milyen függvények vannak?
1.táblázat összeálít(lista)-> txt - összeálítja a html kód szövegét formátumba,sor végén
egy kuka
2.megjelenítés(txt) - megjelenít egy html szöveget egy html elembe
3.tablazatbaTesz(lista) - összeszedi a űrlapadatokat és hozzá füzi a listához,
majd megjeleníti újra a táblázatot. - akkor hívodik ha a hozzá add kattintunk
4.tablazatRendez(lista)- adott mező szerint rendezi a táblázatot. - akkor hívodík meg ha a
fejlécre kattintunk szerint rendezzük. berendezzük a listát majd újra jelenítjük
5.sorTorles(lista,index) - minden sor végén legyen egy kuka ,a sor indexével, erre a kukára kattintva töröljünk 
az adott sort listábol és újra jelenítjuk a modosítot listát
6.szuresNevSzerint(lista,szurtSzoveg)->szurtLista  - a szűrövel írt szó alapján kilistázza azokat az adatokat a listábol
amelyben a név mezőjében az adott szó
meg jelenítjuk a szürt listát az oldalon
akkor fog lefutni ha a szürö mezö tartalma megváltozik 
*/