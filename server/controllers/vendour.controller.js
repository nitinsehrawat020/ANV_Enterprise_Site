import mongoose from "mongoose";
import VendoursModel from "../models/vendours.module.js";
import SiteModel from "../models/site.module.js";

export async function addVendour(req, res) {
  try {
    const { name, phoneNumber, address } = req.body;
    if (!name || !phoneNumber || !address) {
      res.status(400).json({
        message: "kindly provide all the required feild",
        success: false,
        error: true,
      });
    }

    const vendour = new VendoursModel({
      name: name,
      phoneNumber: phoneNumber,
      address: address,
    });
    vendour.save();

    res.status(200).json({
      message: "added successfully!",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function getVendours(req, res) {
  try {
    const data = await VendoursModel.find().populate("transaction.items.site");

    res.status(200).json({
      message: "all the vendours data has been fetched",
      success: true,
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function updateTransaction(req, res) {
  try {
    const vendourId = req.params.vendourId;
    const { date, amount, status, items } = req.body;
    console.log(items);

    if (!amount || !status) {
      return res.status(400).json({
        message: "kindly provide all the required field",
        success: false,
        error: true,
      });
    }

    const vendour = await VendoursModel.findById(vendourId);

    if (!vendour) {
      return res.status(400).json({
        message: "no vendour found!!",
        success: false,
        error: true,
      });
    }

    const payload = {
      date: date,
      amount: amount,
      status: status,
      items: items,
    };

    vendour.transaction.push(payload);
    console.log(vendour.itemCosting);

    if (vendour.itemCosting.length === 0) {
      items.forEach((item) => {
        item.itemList.forEach((item) => {
          const payload = { name: item.name, price: item.price };
          vendour.itemCosting.push(payload);
        });
      });
    } else {
      items.map((item) => {
        item.itemList.map((cItem) => {
          vendour.itemCosting.map((vItem) => {
            if (cItem.name === vItem.name) {
              console.log(cItem, vItem);

              if (cItem.price !== vItem.price) vItem.price = cItem.price;
            }
          });
        });
      });
    }

    if (status === "not paid") {
      vendour.payment.totalBalance += amount;
    }

    await vendour.save();

    items.map(async (item) => {
      const site = await SiteModel.findById(item.site);
      if (!site) {
        return res.status(400).json({
          message: "the site cannot be found",
          success: false,
          error: true,
        });
      }
      site.costMaking.push(item.itemList);
      await site.save();
    });

    return res.status(200).json({
      message: "transaction added succesfully",
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
export async function updatePaymentHistory(req, res) {
  try {
    const vendourId = req.params.vendourId;
    const { date, amount, mode } = req.body;
    console.log(vendourId);

    if (!amount || !mode) {
      return res.status(400).json({
        message: "kindly provide all the required field",
        success: false,
        error: true,
      });
    }

    const vendour = await VendoursModel.findById(vendourId);

    if (!vendour) {
      return res.status(400).json({
        message: "no vendour found!!",
        success: false,
        error: true,
      });
    }

    vendour.payment.totalBalance -= amount;

    const payload = { date, amount, mode };

    vendour.paymentHistory.push(payload);
    await vendour.save();

    return res.status(200).json({
      message: "payment history updated succesfully",
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function deleteVendour(req, res) {
  try {
    const vendourId = req.params.vendourId;

    const vendour = await VendoursModel.findById(vendourId);

    if (!vendour) {
      return res.status(400).json({
        message: "vendour Doesn't exit",
        success: false,
        error: true,
      });
    }

    const deleteVendour = await VendoursModel.deleteOne({ _id: vendourId });

    return res.status(200).json({
      message: "vendour deleted successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
