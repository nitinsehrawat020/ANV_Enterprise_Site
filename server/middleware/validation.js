export function validateRegisterUser(req, res, next) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      mobileNumber,
    } = req.body;
    if (!firstName || !lastName || !email || !password || !confirmedPassword) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: "please provide all the fields",
        success: false,
      });
    }
    if (password !== confirmedPassword) {
      return res.status(400).json({
        status: "error",
        message: "password and confirmed password should be same",
        success: false,
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        status: "error",
        message: "password should be at least 6 characters long",
        success: false,
      });
    }
    if (mobileNumber && mobileNumber.length !== 10) {
      return res.status(400).json({
        status: "error",
        message: "mobile number should be 10 digits long",
        success: false,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      success: false,
    });
  }
}

export function validateAddDesign(req, res, next) {
  try {
    const { title, designType, designArea, description, ETA, rating, image } =
      req.body;

    if (
      !title ||
      !designType ||
      !designArea ||
      !description ||
      !rating ||
      !image
    ) {
      return res.status(400).json({
        message: "kindly provide all the field",
        error: true,
        success: false,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
