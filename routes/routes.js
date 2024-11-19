const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// require the Drone model here

router.get('/drones', listDrones);
  
  router.get('/drones/create', createDrones);
  
  router.post('/drones/create', doCreateDrones);
  
  router.get('/drones/:id/edit', editDrones);
  
  router.post('/drones/:id/edit', doEditDrones);
  
  router.post('/drones/:id/delete', deleteDrones);
  

module.exports = router;
