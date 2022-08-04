const express = require("express");
const ProductGetter = require("./helpers/ProductGetter");

const products = new ProductGetter();

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1 style= 'color:red'>Trabajo Práctico Rodríguez Franco</h1>");
});

app.get("/productos", async (req, res) => {
  let productsList = await products.getAll();
  res.send(productsList);
});

app.get("/productorandom", async (req, res) => {
  let ramdomProduct = await products.getRamdonProduct();

  res.send(ramdomProduct);
});

app.get("*", (req, res) => {
  res.send("Error 404, page not found");
});

const server = app.listen(PORT, () => {
  console.log("Servidor funcionando en: http://localhost:8080/");
});
