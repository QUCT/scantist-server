var express = require('express');
var router = express.Router();
var axios = require('axios');
var request = require('request');

router.get('/rateList', function (req, res) {
    request('https://api.opendota.com/api/heroStats', function (error, response, body) {
      if(error){
        res.send({code:1,data:[]})
      }else{
        res.send({code:0,data:response})
      }
    });
});

router.get('/topPlayer', function (req, res) {
    request('https://api.opendota.com/api/proPlayers', function (error, response, body) {
      if(error){
        res.send({code:1,data:[]})
      }else{
        res.send({code:0,data:response})
      }
    });
});

module.exports = router;