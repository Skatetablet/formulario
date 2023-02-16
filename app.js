document.addEventListener("DOMContentLoaded", function() {

    const form = {
        nombre: "",
        descripcion: "",
        empresa: "",
        ife: "",
        curp: "",
        rfc: "",
        numSeguro: "",
        tipoSange: "",
        licencia: "",
        tipoLicencia: "",
        vigenciaLicencia: "",
        telefono: "",
        expediente:""
    }
    let elementos = [
    inputNombre = document.querySelector("#nombre"),
    inputDesc = document.querySelector("#descripcion"),
    inputEmpresa = document.querySelector("#empresa"),
    inputIFE = document.querySelector("#ife"),
    inputCURP = document.querySelector("#curp"),
    inputRFC = document.querySelector("#rfc"),
    inputSeguro = document.querySelector("#numSeguro"),
    inputSangre = document.querySelector("#tipoSangre"),
    inputLicencia = document.querySelector("#licencia"),
    inputTipoLicencia = document.querySelector("#tipoLicencia"),
    inputVigencia = document.querySelector("#vigenciaLicencia"),
    inputTelefono = document.querySelector("#telefono"),
    inputExpediente = document.querySelector("#expendiente"),
    formulario = document.querySelector(".form"),
    btnSubmit = document.querySelector(".form button[type='submit']"),
    btnReset = document.querySelector(".form button[type='reset']")
    ];

    elementos.forEach(item => {
        item.addEventListener("click", validar)
    });


    function validar(e) {
        

        if (e.target.value.trim() == "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
        
    }


    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        const error = document.createElement("p");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
        
        referencia.appendChild(error);
    }

    

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600");
        if (alerta) {
            alerta.remove();
        }
    }
})
