class RomanNumeral {

    mappingRomanToArabic(){
        const mappingRomanArabic= {
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
        return mappingRomanArabic;
    }

    convertValue(valueToConvert){
        let convertedValue;
        if(this.isValueRoman(valueToConvert)){
            convertedValue = this.convertRomanToArabic(valueToConvert);
        } else {
            convertedValue = this.convertArabicToRoman(valueToConvert);
        }

        return convertedValue;
    }

    isValueRoman(valueToTest){
        const patternToKnowIfValueisRoman  = /[IVXLCDM]/;
        return patternToKnowIfValueisRoman.test(valueToTest);
    }

    convertRomanToArabic(valueOfRomanToConvertToArabic){
        const mappingRomanArabic = this.mappingRomanToArabic();
        let convertedToArabic = 0;
        for(let i=0; i < valueOfRomanToConvertToArabic.length; i++ ){
            const twoChar = valueOfRomanToConvertToArabic.substring(i, i + 2);
            const oneChar = valueOfRomanToConvertToArabic.charAt(i);
            
            if (i + 1 < valueOfRomanToConvertToArabic.length && mappingRomanArabic[twoChar]) {
                convertedToArabic += mappingRomanArabic[twoChar];
                i++;
            } else {
                convertedToArabic += mappingRomanArabic[oneChar];
            }
        }

        return convertedToArabic;
    }

    convertArabicToRoman(valueOfArabicToConvertToRoman){
    }

}

module.exports = { RomanNumeral };

const converter = new RomanNumeral();
console.log(converter.convertValue("CDI"))