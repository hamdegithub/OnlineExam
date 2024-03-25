const router = require("express").Router();

//importing auth middleware
const auth = require("../middleware/auth");

const {
  createadmin,
  getadminById,
  getAdmins,
  login
} = require("./admin.controller");

//route new Admin to be registered using createAdmin controller
router.post("/", createadmin);
router.get("/all", getAdmins);
//route existing Admin to be verified using auth middleware and getAdminById
router.get("/", auth, getadminById);

//route existing Admin to be login using login controller
router.post("/login", login);

module.exports = router;

