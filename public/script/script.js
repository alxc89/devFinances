const Modal = {
  modalOverlay: document.querySelector(".modal-overlay"),
  modalNewTransaction: document.querySelector(".modal"),
  modalImportTransaction: document.querySelector(".modal-import"),

  open(id) {
    this.modalOverlay.classList.add("active");
    if (id === "new-transaction") {
      this.modalNewTransaction.classList.add("active");
    } else if (id === "import-transaction") {
      this.modalImportTransaction.classList.add("active");
    } else {
      return;
    }
  },

  close() {
    this.modalOverlay.classList.remove("active");
    this.modalNewTransaction.classList.remove("active");
    this.modalImportTransaction.classList.remove("active");
  },
};

const DOM = {
  remove() {
    const btnDelete = document.querySelectorAll("td > a");
    btnDelete.forEach((btn) => {
      btn.addEventListener("click", async (event) => {
        const id = event.target.id;
        btn.setAttribute("href", `/${id}`);
      });
    });
  },
};

DOM.remove();
