const express = require('express');
const router = express.Router();
const showController = require('./../controllers/shows');
// router.post('/', checkAuth, courseController.createCourse);
// router.put('/:id', checkAuth, courseController.editCourse);
// router.delete('/:id', checkAuth, courseController.removeCourse);
// router.get('/', checkAuth, courseController.getCourses);

router.post('/create', showController.createShow);
router.get('/:id', showController.getShow);
router.get('/', showController.getShows);
router.delete('/:id', showController.deleteShow);
module.exports = router;