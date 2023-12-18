const express = require("express");
const router = express.Router();

const thesisController = require('../controllers/thesis');

//URL: /thesis

router.get("/", thesisController.thesis_get_all);    //get all thesis  //queries url: page,university,professor

router.get("/professors",thesisController.getProfessors) //get all professors

router.get("/files/:thesisId",thesisController.get_files) //get files of specified thesis
router.get("/file/:fileId",thesisController.get_file_byId) // get specified file 
router.get("/completed", thesisController.thesis_completed_get_all); //get all completed thesis-digital repository
router.get("/completed/file/:assigned_thesisId",thesisController.thesis_completed_file); // get completed thesis(not data) file;
router.get("/completed/data/:fileId",thesisController.thesis_completed_data_file);  //get completed thesis data file;


router.get("/:thesisId",thesisController.get_byId)  //get thesis by id
router.get("/renderImage",thesisController.getThesisImgUrlById)  //get image file by id
router.get("/renderFile",thesisController.getAllThesisImgUrls)  //get file by id
module.exports = router;