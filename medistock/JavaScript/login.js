//captura os campos
var email = document.getElementById('email').value;
var senha = document.getElementById('senha').value;
var outResultado = document.getElementById('outResultado');

//função de login
function logar(){
    //abre o txt
    const fs = require('fs');
    fs.readFile('/Bancos/BancoLogin.txt','utf8', (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
    


}

document.getElementById('logar').addEventListener('click',logar);