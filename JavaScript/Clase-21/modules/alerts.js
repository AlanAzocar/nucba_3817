import Swal from "sweetalert2";

export function showAlert(){
        Swal.fire({
            title: "Bien pensado woody!",
            text: "Le diste bien al boton maquina!",
            icon: "question"
        });
}