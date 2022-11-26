const postController = require("../controller/PostController");
const router = require("express").Router();
const authMiddleware = require('../middleware/AuthMiddleware')


router.use(authMiddleware.authorizeUser)
//create
router.post("/", postController.createPost);

//update
//delete
//like
router.put("/:id/like/", postController.likePost);
//get
//get all
router.get("/all", postController.getAllPosts);

//get local posts
router.get("/coffeepost/:coffee/", postController.getPostInCoffee);

//access a posts
router.put("/:postId/access/access", postController.accessPost);
router.put("/:postId/accept/accept", postController.acceptUser);
router.get("/myposts", postController.getMyPosts);
router.get("/:postId/likes", postController.getLikes);
router.get("/:postId/access/get", postController.getAccess);
router.get("/:postId/accept/get", postController.getAccept);
router.get("/accepted", postController.getAcceptedPosts);

module.exports = router;