'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  

  app.route('/api/convert')
      .get((req, res) =>{
    const input = req.query.input;
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      return res.send("invalid number and unit");
    }
    if (initNum === "invalid number") {
      return res.send("invalid number");
    }
    if (initUnit === "invalid unit") {
      return res.send("invalid unit");
    }
         res.json({
          initNum: Math.round(initNum * 100000) / 100000,
          initUnit: initUnit,
          returnNum: Math.round(returnNum * 100000) / 100000,
          returnUnit: returnUnit,
          string: string
        })
    })
    

};
