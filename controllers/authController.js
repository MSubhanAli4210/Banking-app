export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        status: "error",
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      status: "success",
      message: "Login successful",
      token
    });

  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        status: "error",
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    return res.json({
      status: "success",
      message: "User created successfully",
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.json({
      status: "success",
      message: "Logout successful",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
