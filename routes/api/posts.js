const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// Matches with "/api/posts"
router
  .route("/")
  .get(forumController.findAll)
  .post(forumController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(forumController.findById)
  .post(forumController.update);

module.exports = router;
