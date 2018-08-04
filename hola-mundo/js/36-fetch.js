'use strict'

console.log("estamos listos");
//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');

var usuarios = [];

//Funcion general
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        
        return getJanet();
    })

    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);

        return getInfo();
    })
    .then(data =>{
        console.log(data);
    })

//Todos los usuarios
function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}


function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: "Victor",
        apellidos: "Robles",
        email: "VictorRobles@gmail.com"
    };
    
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
        },300);
        
        var profesor_string = JSON.stringify(profesor);

        if(profesor_string != 'string') return reject('Error fatalisimo');

        return resolve(profesor_string);
    });
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        
        nombre.innerHTML = i+ '. '+user.first_name+' '+user.last_name;
        
        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}

function mostrarJanet(user){
        console.log("estoy buscando a Janet");

        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        
        nombre.innerHTML = user.first_name+' '+user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector('#janet .loading').style.display = 'none'; 
}

