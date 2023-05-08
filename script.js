const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings"
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings"
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings"
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings"
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures"
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures"
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures"
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures"
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures"
  }
];

document.addEventListener("DOMContentLoaded", function () {

  // Seleciona a lista que irá selecionar para inserir dinamicamente
  const paintingsList = document.querySelector(".paintings .product-list");
  const actionFiguresList = document.querySelector(".action-figures .product-list");

  // Cria os Arrays que serão separados
  let actionFiguresArray = [];
  let paintingsArray = [];

  // Separa os Arrays
  function separateItens(productsVerify) {
    for (let i = 0; i < productsVerify.length; i++) {
      if (productsVerify[i].type === "Action Figures") {
        actionFiguresArray.push(productsVerify[i]);
      } else if (productsVerify[i].type === "Paintings") {
        paintingsArray.push(productsVerify[i]);
      }
    }
  }

  // Insere dinamicamente solicitando o array e qual lista o produto será inserido
  function insertItens(productsSeparate, productsList) {
    for (let i = 0; i < productsSeparate.length; i++) {
      const product = productsSeparate[i];

      // Criar um elemento <li> para o produto
      const li = document.createElement("li");
      li.classList.add("product-item");

      // Criar a imagem do produto e adicioná-la ao elemento <li>
      const img = document.createElement("img");
      img.classList.add("product-img");
      img.src = product.image;
      img.alt = product.name;
      li.appendChild(img);

      // Criar o nome do produto e adicioná-lo ao elemento <li>
      const namePriceDiv = document.createElement("section");
      namePriceDiv.classList.add("name-price");
      li.appendChild(namePriceDiv);

      const name = document.createElement("h3");
      name.classList.add("name");
      name.textContent = product.name;
      namePriceDiv.appendChild(name);

      // Criar o preço do produto e adicioná-lo ao elemento <li>
      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = product.price;
      namePriceDiv.appendChild(price);

      productsList.appendChild(li);

    }
  }

  // Chama as funções que foram criadas
  separateItens(productsArray);
  insertItens(actionFiguresArray, actionFiguresList);
  insertItens(paintingsArray, paintingsList);

});



