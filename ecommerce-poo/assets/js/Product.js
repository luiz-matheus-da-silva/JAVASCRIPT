let countItemInCart = 0;
let productPrice = 0;

class Product {
  constructor(id, title, price, description, category, image, rating) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  static async getProductsByApi() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Mapeia os dados recebidos para criar instâncias da classe Product
      const products = data.map(
        (productData) =>
          new Product(
            productData.id,
            productData.title,
            productData.price,
            productData.description,
            productData.category,
            productData.image,
            productData.rating
          )
      );
      return products;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return []; // Retorna um array vazio em caso de erro
    }
  }

  static async showProducts() {
    try {
      const products = await Product.getProductsByApi();
      const divCards = document.querySelector("#divCards");

      // Definir um conjunto para armazenar categorias únicas
      const uniqueCategories = new Set();

      products.forEach((product) => {
        // Adiciona a categoria ao conjunto de categorias únicas
        uniqueCategories.add(product.category);

        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item", "cat", "col-md-3", "col-lg-3", "my-4");

        let card = document.createElement("div");
        card.classList.add("card", "position-relative", "p-2");
        card.style.width = "100%"; // Definir largura fixa para a caixa do produto

        let img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.classList.add("img-fluid", "rounded-4"); // Adiciona uma classe chamada product-image
        img.setAttribute("alt", "image");
        img.style.width = "100%"; // Definir largura fixa para a imagem
        img.style.height = "auto"; // Manter a altura proporcional ao ajustar a largura

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "p-0");

        let title = document.createElement("h2");
        title.classList.add("card-title", "pt-4", "m-0");
        title.textContent = product.title;

        let description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = product.description;

        let price = document.createElement("h3");
        price.classList.add("secondary-font", "text-primary");
        price.textContent = `$${product.price.toFixed(2)}`;

        let btnAddToCart = document.createElement("button");
        btnAddToCart.setAttribute("type", "button");
        btnAddToCart.classList.add(
          "btn",
          "btn-primary",
          "me-3",
          "px-4",
          "pt-3",
          "pb-3"
        );
        btnAddToCart.textContent = "Add to Cart";
        btnAddToCart.addEventListener("click", (e) => {
          e.preventDefault();
          Product.addToCart(product);
          const countItem = document.querySelector(".countItems");
          countItemInCart++;
          countItem.textContent = countItemInCart;
        });

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(btnAddToCart);

        card.appendChild(img);
        card.appendChild(cardBody);

        itemDiv.appendChild(card);
        divCards.appendChild(itemDiv);
      });
    } catch (error) {
      console.error("There was a problem showing the products:", error);
    }
  }

  static addToCart(product) {
    const ulCardContent = document.querySelector("#ulCardContent");
    const cardEmpty = document.querySelector("#cardEmpty");
    const countPrice = document.querySelector(".countPrice");

    productPrice += parseFloat(product.price);

    countPrice.textContent = `$${productPrice.toFixed(2)}`;
    cardEmpty.classList.add("d-none");

    let liProductAdded = document.createElement("li");
    liProductAdded.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "lh-sm"
    );

    let divProductAdded = document.createElement("div");

    let titleProductAdded = document.createElement("h6");
    titleProductAdded.classList.add("my-0");
    titleProductAdded.textContent = product.title;

    let priceProductedAdded = document.createElement("span");
    priceProductedAdded.classList.add("text-body-secondary");
    priceProductedAdded.textContent = `$${product.price}`;

    let btnRemoveProduct = document.createElement("button");
    btnRemoveProduct.classList.add("btn", "btn-sm", "btn-danger");
    btnRemoveProduct.textContent = "Remove";
    btnRemoveProduct.addEventListener("click", (e) => {
      e.preventDefault();
      liProductAdded.remove();
      countItemInCart--;
      productPrice -= product.price;
      countPrice.textContent = `$${productPrice.toFixed(2)}`;
      document.querySelector(".countItems").textContent = countItemInCart;
      if (countItemInCart === 0) {
        cardEmpty.classList.remove("d-none");
      }
    });

    ulCardContent.appendChild(liProductAdded);
    liProductAdded.appendChild(divProductAdded);
    divProductAdded.appendChild(titleProductAdded);
    divProductAdded.appendChild(btnRemoveProduct);

    liProductAdded.appendChild(priceProductedAdded);
  }
}

Product.showProducts();
