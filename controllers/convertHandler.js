let convertHandler = new ConvertHandler();

function ConvertHandler() {
  
  this.getNum = function(input) {   //NEED fraction and an error checker
    let result
    let firstLetter= input.match('[a-zA-Z]').index
    let check = +input.slice(0,firstLetter)
       if (check === 0){ 
      result = 1
    return result}
    let number = input.slice(0,firstLetter)
    let fraction = number.split("/")
       if(fraction.length === 1 ){
      result = fraction[0]
      if (fraction[0] == ''){
        result = 'invalid number'
        return result
      }
      return result
    }
    if(fraction.length == 2){
     if (fraction.some((num) => num === "")) {
        return "invalid number";
      }
      const num = +fraction[0]
      const den = +fraction[1]
      result = num / den
      return result
    }
    if(fraction.length >= 3){
      result = 'invalid number'
      return result
    }
}
 
  
  this.getUnit = function(input) {
    let result
    let options = ['km','mi','gal','l','lbs','kg']
    let length = input.length
    let firstLetter= input.match('[a-zA-Z]').index
    result = input.slice(firstLetter, length).toLowerCase()
    if (result < 0) {
      return result = "invalid unit";
    }
    if (result==='mi'||result==='km'||result==='gal'||result==='l'||result==='lbs'||result==='kg')
      {
      if (result == 'l'){result = result.toUpperCase()}  
        return result;}
    return result ='invalid unit'
  };
  
  this.getReturnUnit = function(initUnit) {
     let result;
    if(initUnit == 'mi'){
      result = 'km'
    }
    else if(initUnit == 'km'){
      result = 'mi'
    }
    else if(initUnit == 'gal'){
      result = 'L'
    }
    else if(initUnit == 'L'){
      result = 'gal'
    }
    else if(initUnit == 'lbs'){
      result = 'kg'
    }
    else if(initUnit == 'kg'){
      result = 'lbs'
    } 
    
    return result;
  };

  this.spellOutUnit = function(unit) {
   let result;
    if(unit == 'mi'){
      result = 'miles'
    }
    else if(unit == 'km'){
      result = 'kilometers'
    }
    else if(unit == 'gal'){
      result = 'gallons'
    }
    else if(unit == 'L'){
      result = 'liters'
    }
    else if(unit == 'lbs'){
      result = 'pounds'
    }
    else if(unit == 'kg'){
      result = 'kilograms'
    } 
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initUnit == 'mi'){
       result = initNum * miToKm
    }
    else if(initUnit == 'km'){
      result = initNum / miToKm 
    }
    else if(initUnit == 'gal'){
      result = initNum * galToL
    }
    else if(initUnit == 'L'){
      result = initNum / galToL
    }
    else if(initUnit == 'lbs'){
      result = initNum * lbsToKg
    }
    else if(initUnit == 'kg'){
      result = initNum / lbsToKg
    } 
    result = Math.round(result * 100000)/100000
        return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = Math.round(initNum * 100000) / 100000 + " " + convertHandler.spellOutUnit(initUnit) + " converts to " + Math.round(returnNum * 100000) / 100000 + " " + convertHandler.spellOutUnit(returnUnit)
    return result;
  };
  
}

module.exports = ConvertHandler;
