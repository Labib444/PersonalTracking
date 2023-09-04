const { Schema, model, SchemaType } = require('mongoose');

const daily_learning_schema = new Schema({
    title: String
});

const daily_learning_model = model('daily_learning', daily_learning_schema);

module.exports = daily_learning_model;
