/*MODO ESTRICTO*/
    'use strict';
console.log('Validación de Usuario y Contraseña');

var objForm = document.getElementById('form');

/*//objForm.addEventListener('submit', function usrpass(){
objForm.addEventListener('submit', function(){
    var strUser = document.getElementById('User').value;
    var strPass = document.getElementById('Password').value;
    
    if(strUser == 'Angel' && strPass == 'Angel11'){
        alert('Bienvenido ' + strUser);
        console.table(strUser, strPass);
    }else{
        alert('Datos incorrectos');
        console.table(strUser, strPass);
        document.getElementById('User').value = '';
        document.getElementById('Password').value = '';
    }
});*/
/*var objForm = document.getElementById('form');
var strUser = document.getElementById('User').value;
var strPass = document.getElementById('Password').value;

objForm.addEventListener('submit', function(){

    obtenerUsuarios()
    .then(objData => objData.json())
    .then(objData => {
        listarUsuarios(objData.data);
        
        obtenerUnUsuario(objData);
    });

    function obtenerUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users')
    };

    function listarUsuarios(objUsuarios){
        objUsuarios.map(function(objData, intIndice){
            console.table(objData.username + '\n' + objData.email);
        });
    };

    function obtenerUnUsuario(objData, strUser, strPass){
        let intUser = objData.username;
        let intPass = objData.email;

        for(strPass in objData){
            
        }

        return(objData);
    };
});*/
var objForm = document.getElementById('form');
var strUser = document.getElementById('User').value;
var strPass = document.getElementById('Password').value;

document.addEventListener('load', function(){
    console.table(strUser);
    console.table(strPass);
    
    
});

function ValidarUsuario(validacion){
        var strEmailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        objForm.addEventListener('submit', function(){
            for(let i in validacion){
                console.table(strUser);
                console.table(strPass);
                if(strUser == validacion.username || strPass == strEmailRegex.test(validacion.email)){
                    /*window.location.href = "HTML/principal.html";*/
                    window.open("HTML/principal.html", "_self");
                    alert('lo lograste! ' + strUser);
                    return boolBand = true;
                    //var strEntrar = window.open("HTML/principal.html", '_self');
                }
            }
        })
        if(boolBand == false){
            alert('Esto funcionará!');
        }
    }