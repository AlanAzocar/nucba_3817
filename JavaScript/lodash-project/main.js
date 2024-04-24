import _, { zip } from "lodash";

// dividir un array en segmentos

const arraySegmentado = _.chunk(["a","b","c","d","e","f"],4);
console.log("Segmentado en array de 2: ",arraySegmentado);

const aleatorio = _.sample([1,2,3,4,5]);
console.log("Numero aleatorio:",aleatorio);

const shuffle= _.shuffle([1,2,3,4,5,6,7,8,9]);
console.log("Array aleatorio:",shuffle);

const duplicados = _. map([1, 2, 3, 4, 5], (n) => n* 2);
console.log("Duplicados: ", duplicados);

