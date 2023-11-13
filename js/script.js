//inicio capturando o body
let bodyElement = document.querySelector("body");

//criação dos três elementos principais no body: header, main e footer
let headerElement = document.createElement("header");
let mainElement = document.createElement("main");
let footerElement = document.createElement("footer");

//criando dentro do body os elementos
bodyElement.append(headerElement, mainElement, footerElement);

ConstruindoHeader();
CriarBanner();
ConstruindoListaMedicamentos();
ConstruindoFooter();
AdicionandoCarrinho ();

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

function CriarBanner(){
    let divImagem = document.createElement("div");
    divImagem.classList.add("banner");
    mainElement.appendChild(divImagem);
}

function ConstruindoListaMedicamentos () {

    let h1Element = document.createElement("h1");
    h1Element.innerText= "Medicamentos Mais Vendidos";
    h1Element.classList.add("titulo", "produtos");

    let ulElement = document.createElement("ul");
    ulElement.classList.add("produtos");
 
    mainElement.append(h1Element, ulElement);
    
    let listaProdutos = 
    [
        {
            key:1,
            nome:"Medicamento 1",
            imagem:"medicamento.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 15,00",
            ehMaisVendido: true,
            ehFavorito: true,
        },
        {
            key:2,
            nome:"Medicamento 2",
            imagem:"medicamento2.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 20,00",
            ehMaisVendido: false,
            ehFavorito: true,
        },
        {
            key:3,
            nome:"Medicamento 3",
            imagem:"medicamento.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 25,00",
            ehMaisVendido: true,
            ehFavorito: false,
        },
        {
            key:4,
            nome:"Medicamento 4",
            imagem:"medicamento2.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 15,00",
            ehMaisVendido: true,
            ehFavorito: false,
        },
        {
            key:5,
            nome:"Medicamento 5",
            imagem:"medicamento.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 20,00",
            ehMaisVendido: false,
            ehFavorito: false,
        },
        {
            key:6,
            nome:"Medicamento 6",
            imagem:"medicamento2.png",
            descricao:"Este é um produto muito legal",
            preco:"R$ 25,00",
            ehMaisVendido: true,
            ehFavorito: false,
        }
    ];

    let listaProdutosMaisVendidos = listaProdutos.filter( p => p.ehMaisVendido === true);

    listaProdutosMaisVendidos.map(produto => {
        let liElement = document.createElement("li");
        liElement.classList.add("listaProdutosMaisVendidos");

        let icone = produto.ehFavorito ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
      </svg>` : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-suit-heart" viewBox="0 0 16 16">
      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
    </svg>`


        liElement.innerHTML = `
            <div class="titulo-botao">
                <h2>${produto.nome}</h2> 
                ${icone}       
            </div>           
            <img src="imagens/${produto.imagem}" alt="Frasco de remédio" width="140px">
            <p class="produto-descricao">${produto.descricao}</p>
            <p class="produto-preco">${produto.preco}</p>
            <button type="button" class="btn btn-info produto-adicionar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>Adicionar</button>
        `
        ulElement.appendChild(liElement);
    });
}

function AdicionandoCarrinho() {
    
    let listaProdutosAdicionados = [];
    console.log("Lista de Produtos Adicionados");

    let lista = document.querySelectorAll(".listaProdutosMaisVendidos");
}

function ConstruindoFooter() {
    textoParagrafo = document.createElement("p");
    textoParagrafo.innerText = "DEVinPharmacy";
    footerElement.appendChild(textoParagrafo);
}
