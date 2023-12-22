const Course = require("../models/Course");
const { mongoosesToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  async index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("HOME", { courses: mongoosesToObject(courses) });
      })
      .catch(next);
    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
