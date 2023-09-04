const express = require('express');
const { middleware_next } = require('../utils/next.utils');

const { getAllLearnings } = require('../controllers/daily_learning.controller');

const router = express.Router();

router.get("/getAllLearnings", middleware_next, getAllLearnings);

module.exports = router;
