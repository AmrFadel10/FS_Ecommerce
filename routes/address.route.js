const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const {
  saveAddressCtrl,
  updateAddressCtrl,
  deleteAddressCtrl,
  getAddressesCtrl,
} = require("../controllers/address.ctrl");
const router = express.Router();

//create, Edit and delete address for user
router
  .get("/", verifyToken, getAddressesCtrl)
  .post("/", verifyToken, saveAddressCtrl)
  .put("/:id", verifyToken, updateAddressCtrl)
  .delete("/:id", verifyToken, deleteAddressCtrl);

module.exports = router;
