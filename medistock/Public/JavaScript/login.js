//função de login
function logar(){
    
    //captura os camps
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var outResultado = document.getElementById('outResultado');

    //verifica se estão vazios 
    if(email.value =='' && senha.value ==''){
        outResultado.textContent= "Insira uma senha ou usuário válido";
    }
    else{
        window.location.assign("HTML/produtos.html")
    }
}
document.getElementById('logar').addEventListener('click',logar);
