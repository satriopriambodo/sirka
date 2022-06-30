const { User } = require("../models");

const getUser = async (req, res, next) => {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { userId, name } = req.body;
    const result = await User.create({ userId, name });
    res.status(201).json({
      userId: result.userId,
      name: result.name,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = +req.params.id;
    const result = await User.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, addUser, getUserById };
