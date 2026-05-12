import { Users } from "../data/Data.js";

export const addUser = (req, res) => {
  try {
    const { user_id, fullName, age, cnic, address, gender, email } = req.body;
    const newUser = { user_id, fullName, age, cnic, address, gender, email };
    Users.push(newUser);
    res.json({
      data: newUser,
      message: "User added successfully",
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "user not found",
    });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { user_id } = req.params;
    const index = Users.findIndex((s) => s.user_id == user_id);

    if (index == -1) {
      return res.json({
        status: "Error",
        message: "User not found",
      });
    }

    // Users = Users.filter((s)=> s.user_id !== user_id);
    Users.splice(index, 1);

    res.json({
      status: "success",
      message: "User deleted",
      Users: Users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Error",
      message: error.message,
    });
  }
};

export const searchUser = (req, res) => {
  try {
    const { user_id } = req.params;
    const foundUser = Users.find((s) => s.user_id == user_id);

    if (!foundUser) {
      return res.json({
        status: "error",
        message: "no user found",
      });
    }

    res.json({
      status: "success",
      User: foundUser,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const getUser = (req, res) => {
  try {
    res.json({
      status: "success",
      Users: Users,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateUser = (req, res) => {
  try {
    const { user_id } = req.params;
    const newData = req.body;
    const index = Users.findIndex((s) => s.user_id == user_id);

    if (index == -1) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }
    Users[index] = { ...Users[index], ...newData };

    res.json({
      status: "success",
      message: "updated User succesfully",
      Users,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
