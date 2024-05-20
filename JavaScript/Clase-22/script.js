const hola = () => {
  console.log("Hola!");
}

const nucba = () => {
  console.log ("Nucba");
}

const init = () => {
  console.log ("Iniciando funcion init")
  hola ();
  nucba ();
}

init ();

// memoty Heap

const obj1 = {valor:1};
const obj2 = obj1;

console.log(obj1,obj2);

obj2.valor=5;

console.log(obj1.valor);

console.log(obj1===obj2)

const obj3 = {... obj1};

obj3.valor=18;

console.log (obj1,obj3)

// Event Loop

console.log("Buueeenas");

setTimeout(() => {
  console.log("Ponga mas huevo")
},1000);

console.log("Vamos Xeneize")