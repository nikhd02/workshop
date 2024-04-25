const express = require('express');
const reviewController = require('../controllers/reviewControllers.js');

const reviewRouter = express.Router();

reviewRouter.route('/')
    .get(reviewController.getAllReview)
    .post(reviewController.addReview);

reviewRouter.route('/:id')
    .delete(reviewController.deleteReview)
    .patch(reviewController.updateReview);




module.exports = reviewRouter;