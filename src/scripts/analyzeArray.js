function analyzeArray(array) {
    array.map( element => {if ( typeof element === 'string') {
        throw new Error("Array contains non-numeric values.");
    } });

    let average = (array.reduce((accumulator, currentValue) => accumulator + currentValue, 0))/(array.length)
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    let arrayLength = array.length;

    return {average: average, min: minValue, max: maxValue, length: arrayLength};
}

module.exports = analyzeArray;
