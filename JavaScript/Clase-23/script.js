// const saludar = () => {
//   console.log("Hoy juega Booocaaa 🟦🟨🟦");
// }

// setTimeout (saludar,7000);

// // setInterval

// let interButton=document.querySelector("#intervalo");
// interButton.addEventListener("click", () => {
//   clearInterval(intervalo);
//   console.log("STOP!🛑");
// })

// let intervalo=setInterval(saludar,1000);
// console.log("Estamos esperando que el intervalo se repita");


// // Asincronismo

// console.log("Comenzando proceso");

// setTimeout(() => {
//   console.log("Proceso asincronico finalizado")
// },2000)

// console.log("proceso finalizado")

//Proemsas

// const promesa= new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         let numeroAleatorio = Math.random();
//         console.log(numeroAleatorio);
//         if(numeroAleatorio>0.5){
//             resolve("Promesa cumplida 😎👌") //decidimos que con ese valor la promesa se cumpla
//         } else {
//             reject(new Error("Se re pudrio se re pudrioo🤬"))// decidimos que con ese valor la promesa no se cumpla
//         }
//     },2000)
// })

// promesa 
//     .then((mensaje) => { // siempre el then debe tener un callback con un argumento para que ahi se almacene lo que retorna la promesa
//         console.log(mensaje)
//     })
//     .catch((error) => {
//       console.error(error)
//     });


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())//devuelve una promesa
    .then(data=>console.log(data))
    .catch(error=>console.error(error))