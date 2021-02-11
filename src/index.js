module.exports = function toReadable (number) {
    var arr_units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr_tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'];

        /*  _arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'); */
        
        if (number == 0) {
            return string = "zero";
        }
        else if (number >= 1 && number <= 19) {
            return string = arr_units[number];
        }
        else if (number >= 20 && number <= 99) {
            var array_number = number.toString();
            var str_ten = arr_tens[array_number.charAt[0]];
            var str_unit = arr_units[array_number.charAt[1]];
            return string = str_ten + ' ' + str_unit;
        }
}
