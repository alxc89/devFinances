const Utils = require("./utils/Utils");
const express = require("express");
const router = express.Router();
const api = require("./services/api/api");

router.get("/", async (req, res) => {
  const { data } = await api.get(`/financial_movement`);
  const transactions = [...data.financialMovements].map((element) => {
    const obj = {
      id: element.id,
      description: element.description,
      moviment_type: element.moviment_type,
      amount: Utils.formatCurrency(element.amount),
      date: Utils.formatDate(element.date),
    };
    return obj;
  });

  const entradas = await Utils.formatCurrency(data.totals.entradas);
  const saidas = await Utils.formatCurrency(data.totals.saidas);
  const total = await Utils.formatCurrency(data.totals.total);

  res.render("index", {
    transactions,
    entradas,
    saidas,
    total,
  });
});

router.post("/create", async (req, res) => {
  const { description, amount, date, type } = req.body;

  console.log(type);

  try {
    await api.post(`/financial_movement`, {
      moviment_type: type,
      description,
      amount,
      date,
    });

    res.redirect("/");
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`http://localhost:4000/financial_movement/${id}`);

  try {
    await api.delete(`/financial_movement/${id}`);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
