const express = require('express');
const router = express.Router();
const createUser = require('../service/createUser');
const checkUser = require('../service/checkUser');
const updateDonation = require('../service/updateDonation');
const updatedashboard = require('../service/updatedashboard');
const getPendingRecords = require('../service/getPendingRecords');
const updateStatus = require('../service/updateStatus');


 router.post('/Signin', createUser);
 router.post('/Login', checkUser);
router.put('/updateDonation',updateDonation);
router.get('/updateadmin',updatedashboard);
router.get('/getPendingList',getPendingRecords);
router.put('/updateStatus',updateStatus);



module.exports = router;