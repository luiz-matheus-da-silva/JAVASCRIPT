// Seleciona elementos do DOM
let btnCreateBook = document.querySelector("#btnCreateBook");
let inputTitle = document.querySelector("#inputTitle");
let inputAuthor = document.querySelector("#inputAuthor");
let inputYear = document.querySelector("#inputYear");
let listBooks = document.querySelector("#listBooks");
let successAlertBook = document.querySelector("#successAlertBook");
let errorAlertBook = document.querySelector("#errorAlertBook");
let selectBook = document.querySelector("#selectBook");
let tableBodyBooks = document.querySelector("#tableBodyBooks");
let searchBooks = document.querySelector("#searchBooks");

// Contador para gerar IDs únicos para cada livro
let bookIdCounter = 0;

// Obtém o ano atual
const actuallyDate = new Date();
const actuallyYear = actuallyDate.getFullYear();

class Book {
  constructor(id, title, author, year) {
    this.id = id; // ID único do livro
    this.title = title; // Título do livro
    this.author = author; // Autor do livro
    this.year = year; // Ano de publicação do livro
  }

  // Limpa os campos de entrada do formulário
  clearInputs() {
    inputTitle.value = "";
    inputAuthor.value = "";
    inputYear.value = "";
  }

  // Cria um novo livro e o adiciona à tabela e ao select
  createBook() {
    try {
      // Validação dos campos de entrada
      if (
        !inputTitle.value || // Verifica se o título está preenchido
        !inputAuthor.value || // Verifica se o autor está preenchido
        !inputYear.value || // Verifica se o ano está preenchido
        isNaN(inputYear.value) // Verifica se o ano é um número
      ) {
        throw new Error("Erro! Preencha todos os campos...");
      }
      // Verifica se o ano é maior que o ano atual
      if (inputYear.value > actuallyYear) {
        inputYear.focus();
        throw new Error(
          "Erro! O ano inserido não pode ser maior que o ano atual..."
        );
      }

      // Cria um novo objeto Book
      let newBook = new Book(
        bookIdCounter++, // Incrementa o contador e atribui o ID ao livro
        inputTitle.value,
        inputAuthor.value,
        inputYear.value
      );

      // Adiciona o novo livro ao select e à tabela
      newBook.addBookInSelect(newBook);
      newBook.addBookInTable(newBook);
      this.clearInputs();

      // Exibe uma mensagem de sucesso
      successAlertBook.textContent = "Sucesso! Livro cadastrado com sucesso...";
      successAlertBook.classList.remove("d-none");
      setTimeout(() => {
        successAlertBook.classList.add("d-none");
      }, 1900);
    } catch (error) {
      // Exibe uma mensagem de erro
      errorAlertBook.textContent = error.message;
      errorAlertBook.classList.remove("d-none");
      setTimeout(() => {
        errorAlertBook.classList.add("d-none");
      }, 1900);
    }
  }

  // Remove um livro da tabela
  removeBook(bookElement) {
    bookElement.remove();
  }

  // Edita um livro: remove da tabela e do select, e preenche os campos de entrada com os dados do livro
  editBook(tableRow, book) {
    this.removeBook(tableRow);
    this.removeBookInSelect(book.id);
    inputTitle.value = book.title;
    inputAuthor.value = book.author;
    inputYear.value = book.year;
  }

  // Remove um livro do select
  removeBookInSelect(bookId) {
    let options = selectBook.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value == bookId) {
        selectBook.remove(i);
        break;
      }
    }
  }

  // Adiciona um livro ao select
  addBookInSelect(book) {
    let option = document.createElement("option");
    option.value = book.id; // Usa o ID do livro como valor
    option.innerHTML = book.title;
    selectBook.appendChild(option);
  }

  // Adiciona um livro à tabela
  addBookInTable(book) {
    let tableRow = document.createElement("tr");

    let titleTd = document.createElement("td");
    titleTd.innerHTML = book.title;

    let authorTd = document.createElement("td");
    authorTd.innerHTML = book.author;

    let yearTd = document.createElement("td");
    yearTd.innerHTML = book.year;

    // Criação das ações de edição e remoção
    let actionTd = document.createElement("td");
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-secondary", "btn-sm");
    btnEdit.innerHTML = "Editar";
    actionTd.appendChild(btnEdit);
    btnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      this.editBook(tableRow, book);
    });

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn", "btn-danger", "btn-sm");
    btnRemove.innerHTML = "Remover";
    actionTd.appendChild(btnRemove);
    btnRemove.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeBook(tableRow);
      this.removeBookInSelect(book.id); // Remove do select também
    });

    let div = document.createElement("div");
    div.classList.add(
      "d-flex",
      "gap-2",
      "justify-content-center",
      "align-items-center"
    );

    div.appendChild(btnEdit);
    div.appendChild(btnRemove);

    tableRow.appendChild(titleTd);
    tableRow.appendChild(authorTd);
    tableRow.appendChild(yearTd);
    tableRow.appendChild(div);

    tableBodyBooks.appendChild(tableRow);
  }

  filterBooks(searchTerm) {
    // Convertendo o searchTerm para minúsculas para tornar a pesquisa insensível a maiúsculas e minúsculas
    searchTerm = searchTerm.toLowerCase();
    
    // Percorre todas as linhas da tabela de livros
    tableBodyBooks.querySelectorAll("tr").forEach(row => {
      // Obtém o título do livro da primeira célula da linha
      let title = row.querySelector("td:first-child").textContent.toLowerCase();
      
      // Verifica se o título do livro contém o termo de pesquisa
      if (title.includes(searchTerm)) {
        // Exibe a linha da tabela
        row.style.display = "";
      } else {
        // Oculta a linha da tabela
        row.style.display = "none";
      }
    });
  }
  
}

// Adiciona o evento de clique ao botão de criação de livro
btnCreateBook.addEventListener("click", (e) => {
  e.preventDefault();
  let newBook = new Book();
  newBook.createBook();
});

searchBooks.addEventListener("input", () => {
  let newBook = new Book();
  newBook.filterBooks(searchBooks.value);
});

