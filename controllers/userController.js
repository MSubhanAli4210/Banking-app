import User from "../models/user.js";
import mongoose from "mongoose";

export const addUser = async (req, res) => {
  try {
    const { fullName, age, cnic, address, gender, email } = req.body;
    const newUser = { fullName, age, cnic, address, gender, email };
    const createdUser = await User.create(newUser);
    res.json({
      data: createdUser,
      message: "User added successfully",
    });
  } catch (error) {
    console.error(error)
    res.json({
      status: "Error",
      message: "unable to add user",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const record = await User.findOneAndDelete({ email: email });
    const Users = await User.find();

    if (!record) {
      return res.json({
        status: "Error",
        message: "User not found",
      });
    }

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

export const searchUser = async (req, res) => {
  try {
    const { email } = req.params;
    const foundUser = await User.find({ email: email} );

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

export const getUser = async(req, res) => {
  try {
    const Users = await User.find();
    res.json({
      status: "success",
      Users,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const newData = req.body;
    const record = await User.findOneAndUpdate({ email: email }, newData, { new: true });

    if (!record) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }
    const updatedUser = await User.find();

    res.json({
      status: "success",
      message: "updated User succesfully",
      Users: updatedUser,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
