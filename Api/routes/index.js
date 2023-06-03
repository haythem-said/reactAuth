var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/register.controller");
const passport = require("passport");
const { Roles, inRole } = require("../security/roleMiddelWare");
const {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  DeleteProfile,
} = require("../controllers/profile.controller");

var router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
/* add profile route */
router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  AddProfile
);
/* get all profiles */
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(Roles.ADMIN),
  FindAllProfiles
);
/* get one profiles */
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  FindSingleProfile
);
/* delete profiles */
router.delete(
  "/profiles/:id",
  passport.authenticate("jwt", { session: false }),
  inRole(Roles.ADMIN),
  DeleteProfile
);

module.exports = router;
