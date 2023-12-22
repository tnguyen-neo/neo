const Course = require("../models/Course");
const { mongoosesToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({ deletedAt: null })
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: mongoosesToObject(courses),
        }),
      )
      .catch(next);
  }
  // [GET] /me/stored/courses
  trashCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/trash-courses", { courses: mongoosesToObject(courses) }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
