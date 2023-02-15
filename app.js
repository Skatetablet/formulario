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

    const inputNombre = document.querySelector("#nombre");
    const inputDesc = document.querySelector("#descripcion");
    const inputEmpresa = document.querySelector("#empresa");
    const inputIFE = document.querySelector("#ife");
    const inputCURP = document.querySelector("#curp");
    const inputRFC = document.querySelector("#rfc");
    const inputSeguro = document.querySelector("#numSeguro");
    const inputSangre = document.querySelector("#tipoSangre");
    const inputLicencia = document.querySelector("#licencia");
    const inputTipoLicencia = document.querySelector("#tipoLicencia");
    const inputVigencia = document.querySelector("#vigenciaLicencia");
    const inputTelefono = document.querySelector("#telefono");
    const inputExpediente = document.querySelector("#expendiente");
    const formulario = document.querySelector(".form")
    const btnSubmit = document.querySelector(".form button[type='submit']");
    const btnReset = document.querySelector(".form button[type='reset']");

    inputNombre.addEventListener("click", (validar));
    inputDesc.addEventListener("click", (validar));
    inputEmpresa.addEventListener("click", (validar));
    inputIFE.addEventListener("click", (validar));
    inputCURP.addEventListener("click", (validar));
    inputRFC.addEventListener("click", (validar));
    inputLicencia.addEventListener("click", (validar));
    inputTipoLicencia.addEventListener("click", (validar));
    inputVigencia.addEventListener("click", (validar));
    inputTelefono.addEventListener("click", (validar));
    inputExpediente.addEventListener("click", (validar));


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

    console.log("Hola")

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600");
        if (alerta) {
            alerta.remove();
        }
    }
})