const db = require('../data/carsDb.js');
const carController = (module.exports = {});

carController.addCar = async function(req, res) {
  try {
    const pending = { ...req.body };
    (!pending.vin || !pending.make || !pending.model || !pending.mileage) &&
      res.status(400).json({
        success: false,
        message: `Error. Invalid Submission.\n
                  Each entry MUST include: VIN, Make, Model, and Mileage.\n
                  Transmission Type and Title Status are Optional.`,
      });

    const newCar = await db.insert(pending);
    newCar
      ? res.status(200).json({
          success: true,
          message: `Success. New Car Added.`,
          newCar,
        })
      : res.status(400).json({
          success: false,
          message: `Error. Unable to add new car to listings.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
};

carController.getCar = async function(req, res) {
  try {
    const car = await db.get(req.params.id);

    car
      ? res.status(200).json({
          success: true,
          message: `Success. Car Retrieved.`,
          car,
        })
      : res.status(400).json({
          success: false,
          message: `Error. Unable to retrieve car.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
};

carController.getCars = async function(req, res) {
  try {
    const cars = await db.get();

    cars
      ? res.status(200).json({
          success: true,
          message: `Success. Cars Retrieved.`,
          cars,
        })
      : res.status(400).json({
          success: false,
          message: `Error. Unable to retrieve cars.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
};

carController.updateCar = async function(req, res) {
  try {
    const valid = await db.get(req.params.id);
    !valid &&
      res.status(404).json({
        success: false,
        message: `Error. Car not Found.`,
      });

    const updatedCar = await db.update(req.params.id, { ...req.body });
    updatedCar
      ? res.status(200).json({
          success: true,
          message: `Success. Updated Car Listing.`,
          updatedCar,
        })
      : res.status(400).json({
          success: false,
          message: `Error. Unable to update car listing.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${err}`,
    });
  }
};

carController.deleteCar = async function(req, res) {
  try {
    const deletedCar = await db.get(req.params.id);
    !deletedCar &&
      res.status(404).json({
        success: false,
        message: `Error. Car not found.`,
      });

    const deleted = await db.remove(req.params.id);
    deleted
      ? res.status(200).json({
          success: true,
          message: `Success. Car Listing Deleted.`,
          deletedCar,
        })
      : res.status(400).json({
          success: false,
          message: `Error. Unable to delete car.`,
        });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Fatal Error.\n${error}`,
    });
  }
};
