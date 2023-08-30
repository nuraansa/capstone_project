// Controller
const express = require("express");
const bodyParser = require("body-parser");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const { users, products } = require("../models");

// ================User's Router=================
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.post("/user", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
// routes.patch('/user/:id', bodyParser.json(), (req, res)=>{
//     users.updateUser(req, res)
// })
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

// ================Product's Router=================
routes.post("/items", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});

routes.get("/items", (req, res) => {
  products.fetchProducts(req, res);
});

routes.get("/items/:id", (req, res) => {
  products.fetchProduct(req, res);
});

routes.get("/nameproduct", (req, res) => {
  products.sortProductsByName(req, res);
});

routes.get("/featured", (req, res) => {
  products.featuredProducts(req, res);
});

routes.put("/product/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
routes.patch("/product/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});

routes.delete("/product/:id", (req, res) => {
  products.deleteProduct(req, res);
});

// ================Cart Router=================
routes.get("/user/:id/carts", (req, res) => {
  cart.fetchCart(req, res);
});
routes.post("/user/:id/cart", bodyParser.json(), (req, res) => {
  cart.insertCart(req, res);
});
routes.patch("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  cart.updateCart(req, res);
});
routes.delete("/user/:id/cart", (req, res) => {
  cart.removeCart(req, res);
});
routes.delete("/user/:id/cart/:id", (req, res) => {
  cart.removeCart(req, res);
});

module.exports = {
  express,
  routes,
  verifyAToken,
};
