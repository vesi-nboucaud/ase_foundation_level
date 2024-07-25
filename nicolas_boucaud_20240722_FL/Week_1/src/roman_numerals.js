const { test } = require("qunit");

class RomanNumeral {
    mappingRomanArabic(){
        return {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        };
    }

    convertValue(valueToConvert){
        if(this.isValueRoman){
            this.convertRomanToArabic
        } else if(this.isValueArabic){

        }
    }

    isValueRoman(valueToTest){
        const pattern = /[IVXLCDM]/;
        return pattern.test(valueToTest);
    }

    isValueArabic(valueToTest){
        if(parseFloat(valueToTest)){
            return true;
        }
        return false;
    }

    convertRomanToArabic(valueRomanToConvertToArabic){
        const mappingRomanArabic = this.mappingRomanArabic();
        let valueConvertedToArabic = 0;
        for(let i=0; i < valueRomanToConvertToArabic.length; i++ ){
            const twoCharacter = valueRomanToConvertToArabic.substring(i, i + 2);
            const oneCharacter = valueRomanToConvertToArabic.charAt(i);
            if (i + 1 < valueRomanToConvertToArabic.length && mappingRomanArabic[twoCharacter]) {
                valueConvertedToArabic += mappingRomanArabic[twoCharacter];
                i++;
            } else {
                valueConvertedToArabic += mappingRomanArabic[oneCharacter];
            }
        }
        return valueConvertedToArabic;
    }

    convertArabicToRoman(valueArabicToConvertToRoman){
        const mappingRomanArabic = this.mappingRomanArabic();
        let valueConvertedToRoman = "";
        for (let romanValueFromMapping in mappingRomanArabic){
            while(valueArabicToConvertToRoman >= mappingRomanArabic[romanValueFromMapping]){
                valueConvertedToRoman += romanValueFromMapping;
                valueArabicToConvertToRoman -= mappingRomanArabic[romanValueFromMapping];
            }
        }
        return valueConvertedToRoman;
    }
}

module.exports = { RomanNumeral };

const converter = new RomanNumeral();
console.log(converter.convertRomanToArabic("XII"))
console.log(converter.convertArabicToRoman(8))