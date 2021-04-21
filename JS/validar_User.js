/*MODO ESTRICTO*/
    'use strict';
console.log('Puedes usar cualquiera de estos usuarios y email para acceder:');

var objForm = document.getElementById('form');
/*var strUser = document.getElementById('User').value;
var strPass = document.getElementById('Password').value;*/

obtenerUsuarios()    
    .then(objData => objData.json())
    .then(objData => {        
        listarUsuarios(objData);
    });

function obtenerUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function listarUsuarios(objUsuario){    
    objUsuario.map(function(objUsuario){
        console.table('Username: ' + objUsuario.username + '\n' + 'Email: ' + objUsuario.email);
        
        return(objUsuario.username, objUsuario.email);
    });
}

/*objForm.addEventListener('submit', function(){*/
$("#submit_login").click(function() {
    let strUser = document.getElementById('User').value;
    let strPass = document.getElementById('Password').value;

    obtenerUsuarios()
       .then(objData => objData.json())
       .then(objData => {

        objData.map(function usrpas(objUsuario){
            if(strUser == objUsuario.username && strPass == objUsuario.email){
                alert('Bienvenido ' + strUser);                           
                window.open("HTML/principal.html","_self");
            }  
        });
    });
});