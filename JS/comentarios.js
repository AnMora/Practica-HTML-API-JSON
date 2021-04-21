/*Modo estricto*/
    'USE STRICT';
console.log('-- MUESTRA DE COMENTARIOS --');

obtenerUsuarios()
    .then(objData => objData.json())
    .then(objData => {
        console.log(objData);
        Comentarios(objData)
    });

function obtenerUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/comments');
}

function Comentarios(objUsuario){
    var objUsuario = objUsuario.slice(0,20);
    objUsuario.map(function(objUsuario){
       
        var strComments = document.getElementById('Comentarios');
        
        var strId = '<div class="col-md-6 text-white flex-column align-items-start">' + '<div class="d-flex w-100 justify-content-between">' + '<small>' + objUsuario.id + '</small>';
        var strUsu = '<small>' + objUsuario.email + '</small>' + '</div>';
        var strCom = '<p class="mb-3">' + objUsuario.body + '</p>' + '</div>';
        
            $('#Comentarios').append(strId + strUsu + strCom);
        
        
        
        /*
        <div class="d-flex w-100 justify-content-between">
            <small>3 days ago</small>
            <small>Donec id elit non mi porta.</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        */
        
    });
}