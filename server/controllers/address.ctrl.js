const { Address } = require("../models/address.model");
const ApiHandler = require("../utils/ApiHandler");

//get all addresses
exports.getAddressesCtrl = async (req, res, next) => {
  try {
    const addresses = await Address.find({ userId: req.user.id }).sort(
      "-createdAt"
    );
    res.status(200).json(addresses);
  } catch (error) {
    next(error);
  }
};

//create address
exports.saveAddressCtrl = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { state, country, zipCode, city, addressLine } = req.body;

    const address = await Address.create({
      userId,
      state,
      country,
      zipCode,
      city,
      addressLine,
    });
    res.status(201).json(address);
  } catch (error) {
    next(error);
  }
};

//update address

exports.updateAddressCtrl = async (req, res, next) => {
  try {
    const { state, country, zipCode, city, addressLine } = req.body;

    let address = await Address.findById(req.params.id);
    if (!address) {
      return next(new ApiHandler(400, "Address not found"));
    }

    address = await Address.findByIdAndUpdate(
      { _id: req.params.id },
      {
        state,
        country,
        zipCode,
        city,
        addressLine,
      },
      { new: true }
    );

    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};

//delete address

exports.deleteAddressCtrl = async (req, res, next) => {
  try {
    let address = await Address.findById(req.params.id);
    if (!address) {
      return next(new ApiHandler(400, "Address not found"));
    }

    address = await Address.findByIdAndDelete({ _id: req.params.id });

    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};
