var tarefas = [];

function adicionarTarefa() 
{
    let inputTarefa = document.getElementById("novaTarefa");
    let novatarefa = inputTarefa.value;
    if (novatarefa === "") return;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(novatarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    inputTarefa.value = "";
    // console.log(tarefas);
    listarTarefas();
}

function listarTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    for (let i = 0; i < tarefas.length; i++)
    {
        let tarefa = tarefas[i];
        let listItem = document.createElement("li");
        listItem.innerHTML = tarefa + " ";
        listItem.appendChild(criarBotaoRemover(i));
        listaTarefas.appendChild(listItem);
    }
}

function removerTarefa(indice)
{
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    if (indice < 0) return;
    if (indice >= tarefas.length) return;

    tarefas.splice(indice, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    listarTarefas();
}

function criarBotaoRemover(indice)
{
    let botao = document.createElement("button");
    botao.addEventListener("click", ()=>{removerTarefa(indice)});
    botao.textContent = "Remover";
    return botao;
}

