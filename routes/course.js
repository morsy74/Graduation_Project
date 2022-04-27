const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/add_course', auth, courseController.createCourse);
router.put('/edit_course/:id', auth, courseController.updateCourse);
router.delete('/delete_course/:id', [auth, admin], courseController.deleteCourse);
router.get('/show_all_courses', courseController.getAllCourses);
router.get('/show_course:id', courseController.getCourseById);

module.exports = router;

