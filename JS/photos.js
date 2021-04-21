/*Modo estricto*/
    'USE STRICT';
console.log('-- MUESTRA DE FOTOS --');

obtenerUsuarios()
    .then(objData => objData.json())
    .then(objData => {
        console.log(objData);
        Photos(objData)
    });

function obtenerUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/photos');
}

function Photos(objUsuario){
    var objUsuario = objUsuario.slice(0,20);
    objUsuario.map(function(objUsuario){
       
        var strComments = document.getElementById('Photos');
        
        if(objUsuario.id == 1){
            var strUsu = '<div class="carousel-item active"><img class="d-block w-100" src="' + objUsuario.url + '" alt="FOTOS" data-holder-rendered="true" style="width: 600px; height: 600px;"></div>';
        }else{
            var strUsu = '<div class="carousel-item"><img class="d-block w-100" src="' + objUsuario.url + '" alt="FOTOS" data-holder-rendered="true" style="width: 600px; height: 600px;"></div>';
        };
        
            $('#Photos').append(strUsu);
    });
}