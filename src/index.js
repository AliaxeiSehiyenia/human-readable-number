module.exports = function toReadable (number) {
    var arr_numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        /*_arr_numbers[2] = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'); */
        /*  _arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'); */
        if (number == 0) {
            return string = "zero";
        }
        else if (number >= 1 && number <= 19) {
            return string = arr_numbers[number];
        }      
}
