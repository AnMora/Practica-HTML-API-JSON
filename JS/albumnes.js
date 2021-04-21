/*Modo estricto*/
    'USE STRICT';
console.log('-- MUESTRA DE ALBUMNES --');

obtenerUsuarios()
    .then(objData => objData.json())
    .then(objData => {
        console.log(objData);
        Albumnes(objData)
    });

function obtenerUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/albums');
}

function Albumnes(objUsuario){
    var objUsuario = objUsuario.slice(0,20);
    objUsuario.map(function(objUsuario){
       
        var strComments = document.getElementById('Albumnes');
        
        var strUsu = '<div class="col-md-3">' + '<div class="card-body">' + '<h4 class="card-title text-md-center">ALBUM#' + objUsuario.id + '</h4>';
        var strCom = '<p class="card-text text-md-center">DESCRIPCIÓN: ' + objUsuario.title + '</p>' + '</div>' + '</div>';
        
            $('#Albumnes').append(strUsu + strCom);
    });
}