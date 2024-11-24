// API

async function cadastrar(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let data = {nome}
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/cadastroInstrumentos', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();    
    
    if(content.success){
        window.location.href = "../login/index.html";
        alert("Sucesso")
    }else{
        alert("Não")
    }
}

