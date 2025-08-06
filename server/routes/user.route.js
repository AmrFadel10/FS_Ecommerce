const express = require("express");
const {
  deleteUserCtrl,
  updateUserCtrl,
  getAllUserCtrl,
  getUserCtrl,
  unblockUserCtrl,
  blockUserCtrl,
  refreshTokenCtrl,
  getWishlistProductsForUserCtrl,
  saveAddressCtrl,
  addWishlistCtrl,
  getCompareProducts,
  addCompareProductsCtrl,
  updateAddressCtrl,
  deleteAddressCtrl,
} = require("../controllers/user.ctrl");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const { validateId } = require("../middlewares/validateId");
const router = express.Router();

router.put("/", verifyToken, updateUserCtrl);
//Signup route
router.get("/get-users", isAdmin, getAllUserCtrl);
router.get("/refresh", refreshTokenCtrl);

//get and update wishlist for the user
router
  .route("/wishlist")
  .get(verifyToken, getWishlistProductsForUserCtrl)
  .put(verifyToken, addWishlistCtrl);

//get and update compare for the user
router
  .route("/compare")
  .get(verifyToken, getCompareProducts)
  .put(verifyToken, addCompareProductsCtrl);

// add products to cart
router.post("/cart", verifyToken, getWishlistProductsForUserCtrl);

//Block user and Unblock him
router.put("/unblock-user/:id", validateId, isAdmin, unblockUserCtrl);
router.put("/block-user/:id", validateId, isAdmin, blockUserCtrl);

//update users
// Delete users
// Get users

router
  .route("/:id")
  .get(validateId, isAdmin, getUserCtrl)

  // here we should add middle ware for who delete
  .delete(validateId, deleteUserCtrl);

module.exports = router;
