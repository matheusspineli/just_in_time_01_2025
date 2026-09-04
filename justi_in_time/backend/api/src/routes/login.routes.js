const express = require("express");

const router = express.Router();

const {
  login,
  logout,
  usuarioLogado,
} = require("../controllers/login.controller");

const autenticar = require("../middleware/login.middleware");

router.post("/login", login);
router.post("/logout", autenticar, logout);
router.get("/usuario", autenticar, usuarioLogado);

module.exports = router;