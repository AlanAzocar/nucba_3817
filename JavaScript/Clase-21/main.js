import './style.css';
import { showAlert } from './modules/alerts';
import { showNotification } from './modules/notification';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

document.querySelector("#showAlert").addEventListener("click", () =>{
  showAlert();
})

document.querySelector("#showNotification").addEventListener("click", () =>{
  showNotification()
})