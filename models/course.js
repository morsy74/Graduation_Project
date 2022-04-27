const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
  price: { 
    type: Number,
    required: true,
    min: 20,
    max: 50
  }
});

const Course = mongoose.model('Course', courseSchema);

function validateCourse(course){

  const schema = Joi.object({ 
      name: Joi.string().min(3).required(),
      price:Joi.number().min(20).max(50).required()
  });

  return schema.validate(course);
}

exports.courseSchema = courseSchema;
exports.Course = Course;
exports.validate = validateCourse;