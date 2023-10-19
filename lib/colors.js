const colorNames = require("./colorNames.json"); //This returns a list of color names suppoerted by the browser.

// This is to check is a string is a valid hexadecimal number, using regular expressions. 
function isValidHexadecimal(str) {
    const regexp = /^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/; // Equals to new: RegExp("^[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$)
    return regexp.test(str);
}





// This is checking if the name of the color is a valid one
function isValidColorName(str) {
    return colorNames.some((element) => element.toLowerCase() === str.toLowerCase());
}




// Checks string is a valid color name or an hexadecimal number
function isValidColorInput(str) {
    return (isValidColorName(str) || isValidHexadecimal(str)) ? true
        : 'You need to provide a valid color name or an Hexadecimal number';
}

// Exports two functions: isValidColorInput and isValidHexadecimal
module.exports = { isValidColorInput, isValidHexadecimal };