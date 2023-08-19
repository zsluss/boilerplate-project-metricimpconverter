const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Testing valid whole number input', function() {
        assert.strictEqual(convertHandler.getNum("2km"), '2', 'Can read a whole number input');
    });
    test('read a decimal number input', function() {
        assert.strictEqual(convertHandler.getNum(".2kg"), '.2', 'Can read a decimal number input');
    });
    test('read a fractional input', function() {
        assert.strictEqual(convertHandler.getNum("3/1kg"), 3, 'Can read a fractional number input')
    });
    test('read a fractional input with a decimal', function() {
        assert.strictEqual(convertHandler.getNum("6.2/2lbs"), 3.1, 'Can read a fractional input with a decimal')
    });
    test('return an error on a double-fraction', function() {
        assert.strictEqual(convertHandler.getNum("2/2/2kg"), 'invalid number', 'Can read an error on a double-fraction')
    });
    test('default to a numerical input of 1 when no numerical input is provided', function() {
        assert.strictEqual(convertHandler.getNum("0kg"), 1, 'Can read no numerical input')
    });
    test('read each valid input unit', function() {
        assert.strictEqual(convertHandler.getUnit("2kg"), 'kg', 'Can read a valid input');
        assert.strictEqual(convertHandler.getUnit("5lbs"), 'lbs', 'Can read a valid input');
        assert.strictEqual(convertHandler.getUnit("2km"), 'km', 'Can read a valid input');
        assert.strictEqual(convertHandler.getUnit("2mi"), "mi", 'Can read a valid input');
        assert.strictEqual(convertHandler.getUnit("2gal"), "gal", 'Can read a valid input');
        assert.strictEqual(convertHandler.getUnit("2L"), "L", 'Can read a valid input');
    });
    test('read return an error for an invalid input unit', function() {
        assert.strictEqual(convertHandler.getUnit("2invalidunit"), 'invalid unit', 'Can not read an invalid input unit')
    });
    test('correct return unit for each valid input unit', function() {
        assert.strictEqual(convertHandler.getReturnUnit("kg"), 'lbs', 'Can read a return unit')
        assert.strictEqual(convertHandler.getReturnUnit("lbs"), 'kg', 'Can read a return unit')
        assert.strictEqual(convertHandler.getReturnUnit("km"), 'mi', 'Can read a return unit')
        assert.strictEqual(convertHandler.getReturnUnit("mi"), 'km', 'Can read a return unit')
        assert.strictEqual(convertHandler.getReturnUnit("L"), 'gal', 'Can read a return unit')
        assert.strictEqual(convertHandler.getReturnUnit("gal"), 'L', 'Can read a return unit')
    });
    test('the spelled-out string unit for each valid input unit', function() {
        assert.strictEqual(convertHandler.getString(2, 'kg', 4.40925, 'lbs'), "2 kilograms converts to 4.40925 pounds", 'Converted a string')
    });
    test('convert gal to L', function() {
        assert.strictEqual(convertHandler.convert(2, "gal"), 7.57082, 'convert gal to L')
    });
    test('convert L to gal', function() {
        assert.strictEqual(convertHandler.convert(1, "L"),  0.26417, 'Can read L to gal')
    });
    test('convert mi to km', function() {
        assert.strictEqual(convertHandler.convert(2, 'mi'), 3.21868, 'Can read mi to km')
    });
    test('convert km to mi', function() {
        assert.strictEqual(convertHandler.convert(5, "km"), 3.10686, 'Can read km to mi')
    });
    test('convert lbs to kg', function() {
        assert.strictEqual(convertHandler.convert(2, "lbs"), 0.90718, 'Can read lbs to kg')
    });
    test('convert kg to lbs', function() {
        assert.strictEqual(convertHandler.convert(2, "kg"), 4.40925, 'Can read kg to lbs')
    });

});