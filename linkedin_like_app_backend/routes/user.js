const express = require('express');
const router = express.Router();

router.get('/GetProfile', (req, res) => {
    res.send('From User page');
});

router.get('/SearchUser', (req, res) => {
    res.send('From User page');
});

router.get('/LastPostEngagement', (req, res) => {
    res.send('From User page');
});

router.post('/ConnectWithUser', (req, res) => {
    res.send('From User page');
});

module.exports = router;