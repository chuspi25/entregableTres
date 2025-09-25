import { ICd } from "./ICd.js";
import { IDiscoDuro } from "./IDiscoDuro.js";
import { IVinilo } from "./IVinilo.js";

const discoNew = new ICd("Metallica",600, 30,"cd musica, mp3","canciones");

discoNew.girar();
discoNew.almacenar("canciones");
discoNew.leer();
discoNew.escribir();
discoNew.reportar();

const discoDuroNew = new IDiscoDuro("Seagate",2000, 7200,"HDD","datos");

discoDuroNew.girar();
discoDuroNew.almacenar("documentos");
discoDuroNew.leer();
discoDuroNew.escribir();
discoDuroNew.reportar();

const viniloNew = new IVinilo("Pink Floyd", 45, "rock progresivo","vinilo musica");

viniloNew.girar();
viniloNew.almacenar("canciones");
viniloNew.leer();
viniloNew.escribir();
viniloNew.reportar();

console.log (discoNew);
console.log (discoDuroNew);
console.log (viniloNew);