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
        window.location.assign("../HTML/produtos.html")
    }
}
document.getElementById('logar').addEventListener('click',logar);
var array=new Array();
function produto(id,nome,quantidade,validade,lote){
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.validade = validade;
}
function cadastraProduto(id,nome,quantidade,validade,lote){
    var p = new produto(id,nome,quantidade,validade,lote);
    array.push(p);
}

'use strict'
const openModal = () => document.getElementById('modal')
    .classList.add('active')


//Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
