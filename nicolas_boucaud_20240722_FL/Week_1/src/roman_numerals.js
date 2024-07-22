class RomanNumeral {
    aMappingNumeralRoman () {
        const aMappingNumeralRoman=[
            {numeral: 10, roman: "X"},
            {numeral: 5, roman: "V"},
            {numeral: 4, roman: "IV"},
            {numeral: 1, roman: "I"}
            
        ];
        return aMappingNumeralRoman;
   }

   convertRomanToNumeral (numberToConvert) {
        const mapping = this.aMappingNumeralRoman();
        let convertedToRomanNumber = ""
        let convertedNumberAndDiff = {};
        let diff = numberToConvert;
        //while(diff !== 0){
            convertedNumberAndDiff = this.lookInMappingForFirstNumberBelow(mapping, numberToConvert, convertedToRomanNumber);
            convertedToRomanNumber += convertedNumberAndDiff.convertedToRomanNumber;
            diff = convertedNumberAndDiff.diff;
            if(diff !== 0){
                
                numberToConvert = diff;
                
                convertedNumberAndDiff = this.lookInMappingForFirstNumberBelow(mapping, numberToConvert, convertedToRomanNumber);
                
                convertedToRomanNumber = convertedNumberAndDiff.convertedToRomanNumber;
                diff = convertedNumberAndDiff.diff;
                
            }
        //}
        return convertedToRomanNumber;
   }

    lookInMappingForFirstNumberBelow(mapping, numberToConvert, convertedToRomanNumber) {
        
        let convertedNumberAndDiff = {
            convertedToRomanNumber: "",
            diff: ""
        };
        let diff;
        mapping.some(function (currentNumberMapping, index, array) {
            if (currentNumberMapping.numeral <= numberToConvert) {
                convertedToRomanNumber = convertedToRomanNumber + currentNumberMapping.roman;
                diff = numberToConvert - currentNumberMapping.numeral;
                
                return true;
            }
            return false;
        });
        
        convertedNumberAndDiff.convertedToRomanNumber = convertedToRomanNumber;
        convertedNumberAndDiff.diff = diff;

        return convertedNumberAndDiff;
    }
}

module.exports = { RomanNumeral };
/* const converter = new RomanNumeral();
console.log(converter.convertRomanToNumeral(6)); */