const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador ++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
        } else {
            checkboxCustomizado.classList.remove("checked");

        }


    })

    const  checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");
    
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);


    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerItemLista.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);


    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt =  "Editar";

    botaoEditar.appendChild(imagemEditar);  
    containerBotoes.appendChild(botaoEditar);
    
    const input = document.getElementById('input-item');
    const btnSalvar = document.getElementById('adicionar-item');
    nomeDoItem.innerText = item.value;
    item.value = ""; // Limpar o input após adicionar o item


    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}
 //   btnSalvar.addEventListener('click', function() {
 //       const itemValue = input.itemValue;
  //      const novoItem = document.createElement('li');
 //       novoItem.textContent = itemValue;
 //       document.getElementById('lista-de-compras').appendChild(novoItem);
  //      input.value = '';
        
 //   });


  //  const containerCheckBox = document.createElement("div");
    //containerCheckBox.classList.add("container", "checkbox");   
    //checkboxInput.classList.add("input", "fintcheckbox");
    //checkboxInput.id = `checkbox_${contador}`;


//    const checkBoxLabel = document.createElement("label");
 //   checkBoxLabel.appendChild(checkboxInput);
 //   containerCheckBox.appendChild(checkBoxLabel);

//    document.querySelector("#listadecompras").appendChild(containerCheckBox);

//    const checkBoxInput = document.createElement("input");
//    checkBoxInput.type = "checkbox";
//    checkBoxInput.classList.add("input", "fintcheckbox");
//    checkBoxInput.id = `checkbox_${++contador}`;

    //checkBoxLabel.setAttribute("for", checkBoxInput.id);
//    checkBoxLabel.appendChild(checkBoxInput);
//    containerCheckBox.appendChild(checkBoxLabel); 


    



    
    //document.getElementById("exemplo").textContent = "Maconha";//



