class Validacao{

    email = document.getElementById('email');
    senha  = document.getElementById('senha');

    botao = document.getElementById("meuBotao");

    constructor(elemento){
        this.elemento = elemento;
    }

    ouvinte(){
        addEventListener('click', () =>{
            this.cliqueButton();
           
           
        })
    }

    cliqueButton(){
        if(this.email.value === "admin" && this.senha.value === "admin"){
            window.open("http://127.0.0.1:5500/intexTelaBusca.html") 
        }else if(this.email.value === "" || this.senha.value === ""){
            
            alert("Todos os campos devem ser preenchidos")
            
        }else{
            
            alert("Senha e email estão diferentes")
        }
        
    }
}

var validacao = new Validacao();




let divProdutos = document.querySelector("")





    