const readline = require('readline');
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
        if(this.isValueRoman(valueToConvert)){
            return this.convertRomanToArabic(valueToConvert);
        } else if(this.isValueArabic(valueToConvert)){
            return this.convertArabicToRoman(parseFloat(valueToConvert));
        } else {
            return 'Invalid input';
        }
    }

    isValueRoman(valueToCheck){
        const pattern = /[IVXLCDM]/;
        return pattern.test(valueToCheck);
    }

    isValueArabic(valueToCheck){
        if(parseFloat(valueToCheck)){
            return true;
        }
        return false;
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

    convertRomanToArabic(valueRomanToConvertToArabic){
        const mappingRomanArabic = this.mappingRomanArabic();
        let valueConvertedToArabic = 0;

        for(let i=0; i < valueRomanToConvertToArabic.length; i++ ){

            const twoChar = valueRomanToConvertToArabic.substring(i, i + 2);
            const oneChar = valueRomanToConvertToArabic.charAt(i);
            if (i + 1 < valueRomanToConvertToArabic.length && mappingRomanArabic[twoChar]) {
                valueConvertedToArabic += mappingRomanArabic[twoChar];
                i++;
            } else {
                valueConvertedToArabic += mappingRomanArabic[oneChar];
            }
        }
        return valueConvertedToArabic;
    }
}

module.exports = { RomanNumeral };

const converter = new RomanNumeral();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a value to convert (either Roman numeral or Arabic number) up to MMM/3000: ', (answer) => {
    const result = converter.convertValue(answer);
    console.log(`Converted value: ${result}`);
    rl.close();
});