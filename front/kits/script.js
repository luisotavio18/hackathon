// API

async function cadastrar(event) {
    event.preventDefault();
    
    let codigo = document.getElementById("codigo").value;
    let status = document.getElementById("status").value;
    let idcat = document.getElementById("idcat").value;
    let data = {codigo,status,idcat}
    console.log(data);

    const response = await fetch('http://localhost:3005/api/store/cadastroInstrumentos', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();    
    
    if(content.success){
        alert("Sucesso")
    }else{
        alert("Não")
    }
}