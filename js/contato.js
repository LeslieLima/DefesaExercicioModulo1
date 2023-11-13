//inicio capturando o body
let bodyElement = document.querySelector("body");

//criação dos três elementos principais no body: header, main e footer
let headerElement = document.createElement("header");
let mainElement = document.createElement("main");
let footerElement = document.createElement("footer");

//criando dentro do body os elementos
bodyElement.append(headerElement, mainElement, footerElement);

ConstruindoHeader();
ConstruindoFormulario();
ConstruindoFooter();

function ConstruindoHeader() {
    // Cria Div dentro do header
    let divCaixaElement = document.createElement("div");
    headerElement.appendChild(divCaixaElement);
    divCaixaElement.classList.add("caixa");

    //Cria um h1 e um nav na div
    let h1Element = document.createElement("h1");
    let navElement = document.createElement("nav");
    divCaixaElement.append(h1Element, navElement);

    //Incluir imagem no h1
    let imagem = document.createElement("img");
    imagem.src = "imagens/logo.png";
    imagem.width = "60";
    h1Element.appendChild(imagem);

    //Cria ul dentro do nav
    let ulElement = document.createElement("ul");
    navElement.appendChild(ulElement);


    //Criando lista com os menus que irão ser renderizados
    let listaMenu = 
    [
        {
            nome:"Pharmacy",
            link: "index.html"
        },
        {
            nome:"Medicamentos",
            link: "medicamentos.html"
        },
        {
            nome:"Fale Conosco",
            link: "contato.html"
        }
    ];

    //Criando li com cada um dos links
    listaMenu.forEach(menu => {
        let liElement = document.createElement("li");
        liElement.innerHTML = 
        ` <a href = ${menu.link}>${menu.nome}</a> `
        ulElement.appendChild(liElement);
    })

    //Criando Button Toggle dark/light mode
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);

    let darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Modo Claro";
    darkModeToggle.classList.add("btn-darkModeToggle");

    liElement.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () =>{
        let darkAtivo = seEstaDark();
        if (darkAtivo) {
            document.documentElement.setAttribute("data-bs-theme", "light");
            darkModeToggle.innerText = "Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            darkModeToggle.innerText = "Modo Claro";
        }
    });

    function seEstaDark() {
        let darkModeSetado = document.documentElement.getAttribute("data-bs-theme") === "dark";

        return darkModeSetado
    }
  
}

function ConstruindoFooter() {
    textoParagrafo = document.createElement("p");
    textoParagrafo.innerText = "DEVinPharmacy";
    footerElement.appendChild(textoParagrafo);
}

function ConstruindoFormulario() {
    let divContainerFormElement = document.createElement("div")
    divContainerFormElement.classList.add("containerForm");
    mainElement.append(divContainerFormElement);

    let formContatoElement = document.createElement("form");
    formContatoElement.setAttribute("name", "formContato");
    formContatoElement.setAttribute("class", "row g-3");
    divContainerFormElement.append(formContatoElement)

    formContatoElement.innerHTML=`
<div class="col-12">
    <label for="inputNome" class="form-label">Nome</label>
    <input type="text" class="form-control" id="inputNome" placeholder="Informe seu nome" name="nome" required>
</div>

<div class="col-12">
    <label for="inputTelefone" class="form-label">Telefone para contato</label>
    <input type="text" class="form-control" id="inputTelefone" placeholder="Informe seu telefone" name="telefone">
</div>

<div class="col-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Informe seu e-mail" name="email"> 
</div>

<div class="col-12">
    <label for="inputState" class="form-label">Assunto</label>
    <select id="inputState" class="form-select" name="assunto">
        <option selected>Selecione...</option>
        <option>Comercial</option>
        <option>Duvidas</option>
        <option>Revenda</option>
    </select>
</div>

<div class="col-12">
    <label for="textareaMensagem" class="form-label">Mensagem</label>
    <textarea rows="5" type="email" class="form-control" id="textareaMensagem" name="mensagem"></textarea>
</div>

<div class="col-12">
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck" name="ehOrcamento">
    <label class="form-check-label" for="gridCheck">
    Esta mensagem é sobre um orçamento
    </label>
</div>
</div>

<div class="col-12">
<button type="submit" id="btn-submit" class="btn btn-info botao-enviar">Enviar</button>
</div>
    `
}

let formulario = document.getElementsByName("formContato")[0];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Nome: ", formulario.nome.value);
    alert("Mensagem enviada com sucesso!").

    formulario.nome.value="";
    formulario.telefone.value="";
    formulario.email.value="";
    formulario.assunto.value="";
    formulario.mensagem.value="";
    formulario.ehOrcamento.value=false;
});