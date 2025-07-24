const {
  createCouponCtrl,
  updateCouponCtrl,
  getCouponCtrl,
  getAllCouponCtrl,
  deleteCouponCtrl,
  applyCouponCtrl,
} = require("../controllers/coupon.ctrl");
const { isAdmin, verifyToken } = require("../middlewares/verifyToken");

const { validateId } = require("../middlewares/validateId");

const router = require("express").Router();

router.post("/", verifyToken, applyCouponCtrl);
router.post("/create", isAdmin, createCouponCtrl);
router.get("/:id", getCouponCtrl);
router.put("/:id", validateId, isAdmin, updateCouponCtrl);
router.delete("/:id", validateId, isAdmin, deleteCouponCtrl);
router.get("/", isAdmin, getAllCouponCtrl);

module.exports = router;
