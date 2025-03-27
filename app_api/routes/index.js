const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const ctrlReviews = require("../controllers/reviews");

router.get('/locations', ctrlLocations.locationReadAll);
router.post('/locations/review/new', ctrlLocations.locationCreate);

router.get('/locations/:locationid', ctrlLocations.locationReadOne);
router.put('/locations/:locationid', ctrlLocations.locationUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationDeleteOne);

router.post('/locations/:locationid/reviews', ctrlReviews.reviewCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewDeleteOne);
module.exports = router;
