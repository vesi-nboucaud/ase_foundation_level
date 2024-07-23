class RomanNumeral {

    mappingRomanToArabic(){
        const romanToArabicMap = {
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

        return romanToArabicMap;
    }

    convertValue (value) {
        if(this.testIfValueIsRoman(value)){
            this.convertRomanToArabic(value);
        }
        else {
            this.convertArabicToRoman(value);
        }
   }

   testIfValueIsRoman(value){
        const charToLookFor =  /[MDCLXVI]/;
        return charToLookFor.test(value)

   }

   convertRomanToArabic(valueToConvertToArabic){
        const romanToArabicMap = this.mappingRomanToArabic();
        let valueConvertedToArabic = 0;
        let i = 0;
        while (i < valueToConvertToArabic.length) {
            if (i + 1 < valueToConvertToArabic.length && romanToArabicMap[valueToConvertToArabic.substring(i, i + 2)]) {
                valueConvertedToArabic += romanToArabicMap[valueToConvertToArabic.substring(i, i + 2)];
                i += 2;
            } else {
                valueConvertedToArabic += romanToArabicMap[valueToConvertToArabic.charAt(i)];
                i++;
            }
        }
        return valueConvertedToArabic;
   }

   convertArabicToRoman(valueToConvertToRoman){

   }
}

module.exports = { RomanNumeral };