const Joi = require("joi");
const { Course, validate } = require("../models/course");
const express = require("express");
const mongoose = require("mongoose");

exports.createCourse = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let course = new Course({
    name: req.body.name,
    price: req.body.price,
  });
  await course.save();
  res.send(course);
  next();
};

exports.updateCourse = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    new: true,
  });
  if (!course)
    return res.status(404).send("The course with the given ID is not found");
  res.send(course);
  next();
};

exports.deleteCourse = async (req, res, next) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course)
    return res.status(404).send("The course with the given ID is not found");

  res.send(course);
  next();
};

exports.getAllCourses = async (req, res, next) => {
  const course = await Course.find().sort("name");
  res.send(course);
  next();
};

exports.getCourseById = async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("The course with the given ID is not found");
  res.send(course);
  next();
};
