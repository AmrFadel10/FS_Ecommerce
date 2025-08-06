const { validateMongoDbID } = require("../middlewares/validateId");
const Order = require("../models/order.model");
const ApiHandler = require("../utils/ApiHandler");

exports.createOrderCtrl = async (req, res, next) => {
  const { orderItems, totalPrice, totalPriceAfterDiscount, address } = req.body;
  console.log(req.body);
  const { id } = req.user;
  try {
    const order = await Order.create({
      orderItems,
      address,
      totalPrice,
      totalPriceAfterDiscount,
      user: id,
    });
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getMyOrderCtrl = async (req, res, next) => {
  const { id } = req.user;
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit || 0;
  try {
    const orders = await Order.find({ user: id })
      .populate("orderItems.product")
      .populate("address")
      .populate("user")
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const count = await Order.countDocuments({ user: id });
    // console.log(orders);
    if (!orders) {
      return next(new ApiHandler(400, "No order found!"));
    }
    res.status(200).json({ orders, count });
  } catch (error) {
    next(error);
  }
};
exports.getOrderCtrl = async (req, res, next) => {
  const { id } = req.user;
  try {
    validateMongoDbID(id);

    const order = await Order.findOne({ orderBy: id }).populate(
      "products.product"
    );
    if (!order) {
      return next(new ApiHandler(400, "No order found!"));
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.getOrderByUserIdCtrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    validateMongoDbID(id);

    const order = await Order.findOne({ orderBy: id }).populate(
      "products.product"
    );
    if (!order) {
      return next(new ApiHandler(400, "No order found!"));
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.getAllOrdersCtrl = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("products.product")
      .populate("orderBy");
    if (!orders) {
      return next(new ApiHandler(400, "No orders found!"));
    }
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.updateOrderCtrl = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.user;
  try {
    const updateOrder = await Order.findOneAndUpdate(
      { orderBy: id },
      {
        $set: {
          "paymentIntent.status": status,
          orderStatus: status,
        },
      },
      { new: true }
    );
    if (!updateOrder) {
      return next(new ApiHandler(400, "No order available to update"));
    }
    res.status(200).json(updateOrder);
  } catch (error) {
    next(error);
  }
};
