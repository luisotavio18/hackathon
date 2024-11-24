// API

async function cadastrar(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let credencial = document.getElementById("credencial").value;
    let cargo = document.getElementById("cargo").value;

    let data = {nome, cpf, endereco, credencial, cargo}
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/cadastroFuncionarios', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();    
    
    if(content.success){
        console.log('Sucesso, dados enviados.')
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

