const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

router
    .post('/test', apiController.Test)
    .post('/transform-data', apiController.TransformData)
    .post('/upload-file', apiController.UploadFile)
    .get('/list-files', apiController.ListFiles);

module.exports = router;