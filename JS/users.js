/*Modo estricto*/
    'USE STRICT';
console.log('-- MUESTRA DE USERS --');

obtenerUsuarios()
    .then(objData => objData.json())
    .then(objData => {
        console.log(objData);
        Users(objData)
    });

function obtenerUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function Users(objUsuario){
    var objUsuario = objUsuario.slice(0,10);
    objUsuario.map(function(objUsuario){
       
        var strComments = document.getElementById('Users');
        
        var strWebsite = '<div class="mb-2 pb-2 col-md-6 text-white flex-column align-items-start">' + '<div class="d-flex w-100 justify-content-between">' + '<small><a class="btn btn-primary mb-2" href="' + objUsuario.website + '">' + objUsuario.website + '</a></small>';
        
        var strName = '<small>' + objUsuario.name + '</small>' + '</div>';
        
        var strUsername = '<div class="d-flex w-100 justify-content-between">' + '<small>' + objUsuario.username + '</small>';
        
        var strEmail = '<small>' + objUsuario.email + '</small>' + '</div>';
        
        var strPhone = '<p>' + 'Telfono: ' + objUsuario.phone + '</p>' + '</div>';
        
            $('#Users').append(strWebsite + strName + strUsername +  strEmail + strPhone);
                
    });
}