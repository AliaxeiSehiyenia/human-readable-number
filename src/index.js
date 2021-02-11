module.exports = function toReadable (number) {
        var string = "";
        /* _arr_numbers[1] = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
        _arr_numbers[2] = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'); */
        /*  _arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'); */
       
        if (number == 0) {
            string = "zero";
        }
      
        return string;
}
