import './style.css';
import { showAlert } from './modules/alerts';
import { showNotification } from './modules/notification';


document.querySelector("#showAlert").addEventListener("click", () =>{
  showAlert();
})

document.querySelector("#showNotification").addEventListener("click", () =>{
  showNotification()
})