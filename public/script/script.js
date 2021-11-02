const Modal = {
  modalOverlay: document.querySelector(".modal-overlay"),

  open() {
    this.modalOverlay.classList.add("active");
  },

  close() {
    this.modalOverlay.classList.remove("active");
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
