const express = require("express");
const { getVideoDettails, addVideo } = require("../controllers/video.controller");

const router = express.Router();


router.post("/addVideo" , addVideo  );
router.get("/getVideo" , getVideoDettails);


module.exports = router;