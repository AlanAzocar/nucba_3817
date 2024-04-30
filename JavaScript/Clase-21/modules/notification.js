import Toastify from 'toastify-js'

export function showNotification () {
    Toastify({
        text: "Aguante Boca. 🟦🟨🟦",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast(); 
}