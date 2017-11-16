window.onload = function () {


    document.getElementById("enviar").addEventListener("click", validar, false);
    document.getElementById("formulario").addEventListener("input", actualizar, false);


    function validar (){

        if(document.getElementById("nombre").value == "Rubén"){
            console.log("Bien");
        }else{
            console.log("Mal");
        }

    }

    function actualizar (){
//        document.target.setCustomValidity('Las passwords deben coincidir'); Mal
    }


}
