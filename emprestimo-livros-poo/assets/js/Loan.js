let tableBodyLoans = document.querySelector("#tableBodyLoans");
let btnCreateLoan = document.querySelector("#btnCreateLoan");
let successAlertLoan = document.querySelector("#successAlertLoan");
let errorAlertLoan = document.querySelector("#errorAlertLoan");

class Loan {
  constructor(customer, book) {
    this.customer = customer;
    this.book = book;
  }

  createLoan() {
    try {
      let selectCustomer = document.querySelector("#selectCustomer");
      let selectBook = document.querySelector("#selectBook");
      
      if (!selectBook.value || !selectCustomer.value || selectBook.value == "Selecione um livro" || selectCustomer.value == "Selecione um cliente") {
        throw new Error("Erro! Selecione uma opção em cada...");
      }

      let newLoan = new Loan(selectCustomer.options[selectCustomer.selectedIndex].text, selectBook.options[selectBook.selectedIndex].text);
      newLoan.addLoanInTable(newLoan);

      successAlertLoan.textContent = "Sucesso! Empréstimo cadastrado com sucesso.";
      successAlertLoan.classList.remove("d-none");
      setTimeout(() => {
        successAlertLoan.classList.add("d-none");
      }, 1900);
    } catch (error) {
      errorAlertLoan.textContent = error.message;
      errorAlertLoan.classList.remove("d-none");
      setTimeout(() => {
        errorAlertLoan.classList.add("d-none");
      }, 1900);
    }
  }
  editLoan(tableRow, loan) {
    this.removeLoan(tableRow);
    let selectCustomer = document.querySelector("#selectCustomer");
    let selectBook = document.querySelector("#selectBook");
    // Procurar o índice do cliente no <select> e definir o valor selecionado
    for (let i = 0; i < selectCustomer.options.length; i++) {
      if (selectCustomer.options[i].text === loan.customer) {
        selectCustomer.selectedIndex = i;
        break;
      }
    }
    // Procurar o índice do livro no <select> e definir o valor selecionado
    for (let i = 0; i < selectBook.options.length; i++) {
      if (selectBook.options[i].text === loan.book) {
        selectBook.selectedIndex = i;
        break;
      }
    }
  }
  

  removeLoan(tableRow) {
    tableRow.remove();
  }

  addLoanInTable(loan) {
    let tableRow = document.createElement("tr");

    let customerTd = document.createElement("td");
    customerTd.innerHTML = loan.customer;

    let bookTd = document.createElement("td");
    bookTd.innerHTML = loan.book;

    let actionTd = document.createElement("td");
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "btn-secondary", "btn-sm");
    btnEdit.innerHTML = "Editar";
    actionTd.appendChild(btnEdit);
    btnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      this.editLoan(tableRow, loan);
    });

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn", "btn-danger", "btn-sm");
    btnRemove.innerHTML = "Remover";
    actionTd.appendChild(btnRemove);
    btnRemove.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeLoan(tableRow);
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

    tableRow.appendChild(customerTd);
    tableRow.appendChild(bookTd);
    tableRow.appendChild(div);

    tableBodyLoans.appendChild(tableRow);
  }
}

btnCreateLoan.addEventListener("click", (e) => {
  e.preventDefault();
  let loan = new Loan(selectCustomer.innerHTML, selectBook.innerHTML);
  loan.createLoan();
});
