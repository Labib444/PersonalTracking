const { getDbConnection } = require("../config/db_connection");
const daily_learning_model = require("../models/daily_learning.model")

getAllLearnings = async(req, res) => {
    var data = await daily_learning_model.find({});
    return res.status(200).json(data);
}

module.exports = {
    getAllLearnings
}




