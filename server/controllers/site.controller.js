import SiteModel from "../models/site.module.js";

export async function registerNewSite(req, res) {
  try {
    const {
      name,
      address,
      totalPayment,
      userEmail,
      workType,
      area,
      floor,
      rooms,
      kitchen,
      bathroom,
      hall,
    } = req.body;
    console.log(
      name,
      address,
      totalPayment,
      userEmail,
      workType,
      area,
      floor,
      rooms,
      kitchen,
      bathroom,
      hall
    );

    const payload = {
      name,
      address,
      workType,
      paymentDetails: {
        totalPayment,
      },
      buildingDetails: {
        area,
        floor,
        flatsInfo: [
          {
            rooms: rooms || 0,
            kitchen: kitchen || 0,
            bathroom: bathroom || 0,
            hall: hall || 0,
          },
        ],
      },
      userEmail,
    };

    const site = new SiteModel(payload);
    const upload = await site.save();
    return res.status(200).json({
      message: "site uploaded sucessfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function updateworkProgress(req, res) {
  try {
    const siteId = req.params.siteId;
    const { workProgress } = req.body;

    const site = SiteModel.findOne(siteId);

    if (!site) {
      return res.status(400).json({
        message: "site can not be found",
        success: false,
        error: true,
      });
    }
    if (!workProgress) {
      return res.status(400).json({
        message: "kindly provide the value",
        success: false,
        error: true,
      });
    }

    const update = await SiteModel.findByIdAndUpdate(siteId, {
      workProgress: workProgress,
    });
    res.status(200).json({
      message: "work progress updated successfully",
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
export async function updateInventoryItem(req, res) {
  try {
    const siteId = req.params.siteId;
    const { name, newQuantity } = req.body;
    const site = await SiteModel.findOne({ _id: siteId });
    if (!site) {
      return res.status(400).json({
        message: "no site found with this id",
        success: false,
        error: true,
      });
    }
    // Find the specific item in the inventory array
    const inventoryItem = site.inventory.find((item) => item.name === name);

    if (!inventoryItem) {
      return res.status(400).json({
        message: "no item found with this name",
        success: false,
        error: true,
      });
    }

    // Update the quantity of the found item
    inventoryItem.quantity = newQuantity;

    // Save the parent site document, which persists the change in the inventory item
    await site.save();

    return res.status(200).json({
      message: "inventory item quantity updated successfully",
      success: true,
      error: false,
      data: inventoryItem,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function addItemToInventory(req, res) {
  try {
    const siteId = req.params.siteId;

    const { name, quantity } = req.body;
    const site = await SiteModel.findOne({ _id: siteId });

    if (!site) {
      res.status(400).json({
        message: "no site found with this id",
        success: false,
        error: true,
      });
    }

    site.inventory.push({ name: name, quantity: quantity });
    await site.save();

    res.status(200).json({
      message: "added sucessfully",
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
export async function removeItemFromInventory(req, res) {
  try {
    const siteId = req.params.siteId;
    const { itemId } = req.body;

    const site = await SiteModel.findOne({ _id: siteId });
    if (!site) {
      return res.status(400).json({
        message: "no site find!",
        success: false,
        error: true,
      });
    }

    const updatedInventory = site.inventory.filter((item) => {
      return itemId !== item._id.toString();
    });
    const updatedSite = await SiteModel.updateOne(
      { _id: siteId },
      {
        inventory: updatedInventory,
      }
    );

    if (updatedSite.modifiedCount === 0) {
      return res.status(500).json({
        message: "there is a issue deleting the item",
        success: false,
        error: true,
      });
    }

    return res.status(200).json({
      message: "item removed succesfully!",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function getAllSites(req, res) {
  try {
    const data = await SiteModel.find();

    res.status(200).json({
      message: "all the site has been fetched",
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

export async function addPaymentLog(req, res) {
  try {
    const siteId = req.params.siteId;
    const { date, amount, receiver, mode } = req.body;
    if (!amount || !receiver || !mode) {
      res.status(400).json({
        message: "kindly provide all the details",
        success: false,
        error: true,
      });
    }
    const site = await SiteModel.findById(siteId);
    if (!site) {
      res.status(400).json({
        message: "site cannot be found",
        success: false,
        error: true,
      });
    }
    const updatedTotalPayment = site.paymentDetails.receivedPayment + amount;

    if (site.paymentDetails.totalPayment !== "Mesurement") {
      site.paymentDetails.remainingPayment =
        +site.paymentDetails.totalPayment - amount;
    }
    site.paymentDetails.receivedPayment = updatedTotalPayment;

    site.paymentLog.push({ date, amount, receiver, mode });
    await site.save();

    res.status(200).json({
      message: "payment hass been added sucessfully",
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

export async function deleteSite(req, res) {
  try {
    const siteId = req.params.siteId;

    const sites = await SiteModel.findById(siteId);

    if (!sites) {
      return res.status(400).json({
        message: "site Cannot be found",
        success: false,
        error: true,
      });
    }

    const deletedsite = await SiteModel.deleteOne({ _id: siteId });

    return res.status(200).json({
      message: `${deleteSite.name} Site Delete Successfully`,
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
