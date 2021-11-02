const Utils = {
  formatCurrency(value) {
    value = Number(value);
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return value;
  },

  formatDate(date) {
    const newDate = date.substring(0, 10);
    const splittedDate = newDate.split("-");
    const dateFormated = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    return dateFormated;
  },
};

module.exports = Utils;
