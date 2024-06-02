// Seleção de elementos do DOM
let inputName = document.querySelector("#inputName");
let inputPhone = document.querySelector("#inputPhone");
let inputEmail = document.querySelector("#inputEmail");
let successAlertCustomer = document.querySelector("#successAlertCustomer");
let errorAlertCustomer = document.querySelector("#errorAlertCustomer");
let selectCustomer = document.querySelector("#selectCustomer");
let btnCreateCustomer = document.querySelector("#btnCreateCustomer");
let listCustomers = document.querySelector("#listCustomer");
let tableBodyCustomers = document.querySelector("#tableBodyCustomers");
let searchCustomers = document.querySelector("#searchCustomers");

// Contador para gerar IDs únicos para cada cliente
let customerIdCounter = 0;

class Customer {
  constructor(id, name, phone, email) {
    this.id = id; // ID único do cliente
    this.name = name; // Nome do cliente
    this.phone = phone; // Telefone do cliente
    this.email = email; // Email do cliente
  }

  // Limpa os campos de entrada do formulário
  clearInputs() {
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
  }

  // Cria um novo cliente e o adiciona à tabela e ao select
  createCustomer() {
    try {
      // Validação dos campos de entrada
      if (
        inputName.value == "" ||
        inputPhone.value == "" ||
        inputEmail.value == ""
      ) {
        throw new Error("Erro! Preencha todos os campos.");
      }

      // Cria um novo objeto Customer
      let newCustomer = new Customer(
        customerIdCounter++, // Incrementa o contador e atribui o ID ao cliente
        inputName.value,
        inputPhone.value,
        inputEmail.value
      );

      // Adiciona o novo cliente ao select e à tabela
      newCustomer.addCustomerInSelect(newCustomer);
      newCustomer.addCustomerInTable(newCustomer);
      newCustomer.clearInputs();

      // Exibe uma mensagem de sucesso
      successAlertCustomer.textContent =
        "Sucesso! Cliente cadastrado com sucesso...";
      successAlertCustomer.classList.remove("d-none");
      setTimeout(() => {
        successAlertCustomer.classList.add("d-none");
      }, 1900);
    } catch (error) {
      // Exibe uma mensagem de erro
      errorAlertCustomer.textContent = error.message;
      errorAlertCustomer.classList.remove("d-none");
      setTimeout(() => {
        errorAlertCustomer.classList.add("d-none");
      }, 1900);
    }
  }

  // Edita um cliente: remove da tabela e do select, e preenche os campos de entrada com os dados do cliente
  editCustomer(tableRow, customer) {
    this.removeCustomerFromTable(tableRow);
    this.removeCustomerFromSelect(customer.id);
    inputName.value = customer.name;
    inputPhone.value = customer.phone;
    inputEmail.value = customer.email;
  }

  // Remove um cliente da tabela
  removeCustomerFromTable(customerElement) {
    customerElement.remove();
  }

  // Remove um cliente do select
  removeCustomerFromSelect(customerId) {
    let options = selectCustomer.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value == customerId) {
        selectCustomer.remove(i);
        break; // Encerra o loop após remover a opção
      }
    }
  }

  // Adiciona um cliente ao select
  addCustomerInSelect(customer) {
    let optionCustomer = document.createElement("option");
    optionCustomer.value = customer.id; // Usa o ID do cliente como valor
    optionCustomer.innerHTML = customer.name;
    selectCustomer.appendChild(optionCustomer);
  }

  // Adiciona um cliente à tabela
  addCustomerInTable(customer) {
    let tableRow = document.createElement("tr");

    let nameTd = document.createElement("td");
    nameTd.innerHTML = customer.name;

    let phoneTd = document.createElement("td");
    phoneTd.innerHTML = customer.phone;

    let emailTd = document.createElement("td");
    emailTd.innerHTML = customer.email;

    // Criação das ações de edição e remoção
    let actionTd = document.createElement("td");
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-secondary", "btn-sm");
    btnEdit.innerHTML = "Editar";
    actionTd.appendChild(btnEdit);
    btnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      this.editCustomer(tableRow, customer);
    });

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn", "btn-danger", "btn-sm");
    btnRemove.innerHTML = "Remover";
    actionTd.appendChild(btnRemove);
    btnRemove.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeCustomerFromTable(tableRow);
      this.removeCustomerFromSelect(customer.id); // Remove do select também
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

    tableRow.appendChild(nameTd);
    tableRow.appendChild(phoneTd);
    tableRow.appendChild(emailTd);
    tableRow.appendChild(div);

    tableBodyCustomers.appendChild(tableRow);
  }

  filterCustomers(searchTerm) {
    // Convertendo o searchTerm para minúsculas para tornar a pesquisa insensível a maiúsculas e minúsculas
    searchTerm = searchTerm.toLowerCase();
    // Percorre todas as linhas da tabela de clientes
    tableBodyCustomers.querySelectorAll("tr").forEach((row) => {
      // Obtém o nome do cliente da primeira célula da linha
      let name = row.querySelector("td:first-child").textContent.toLowerCase();
      // Verifica se o nome do cliente contém o termo de pesquisa
      if (name.includes(searchTerm)) {
        // Exibe a linha da tabela
        row.style.display = "";
      } else {
        // Oculta a linha da tabela
        row.style.display = "none";
      }
    });
  }
}

// Adiciona o evento de clique ao botão de criação de cliente
btnCreateCustomer.addEventListener("click", (e) => {
  e.preventDefault();
  let newCustomer = new Customer();
  newCustomer.createCustomer();
});

searchCustomers.addEventListener("input", () => {
  let newCustomer = new Customer();
  newCustomer.filterCustomers(searchCustomers.value);
});

