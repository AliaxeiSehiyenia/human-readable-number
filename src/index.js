module.exports = function toReadable (number) {
    var arr_numbers = new Array();
        arr_numbers[1] = new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать');
        arr_numbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто');
        arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот');
        function number_parser(num, _desc) {
            var string = '';
            var num_hundred = '';
            if (num.length == 3) {
                num_hundred = num.substr(0, 1);
                num = num.substr(1, 3);
                string = arr_numbers[3][num_hundred] + ' ';
            }
            if (num < 20) string += arr_numbers[1][parseFloat(num)] + ' ';
            else {
                var first_num = num.substr(0, 1);
                var second_num = num.substr(1, 2);
                string += arr_numbers[2][first_num] + ' ' + arr_numbers[1][second_num] + ' ';
            }
            switch (_desc) {
            case 0:
                var last_num = parseFloat(num.substr(-1));
                if (last_num == 1) string += 'рубль';
                else if (last_num > 1 && last_num < 5) string += 'рубля';
                else string += 'рублей';
            break;
            case 1:
                var last_num = parseFloat(num.substr(-1));
                if (last_num == 1) string += 'тысяча ';
                else if (last_num > 1 && last_num < 5) string += 'тысячи ';
                else string += 'тысяч ';
                string = string.replace('один ', 'одна ');
                string = string.replace('два ', 'две ');
            break;
            case 2:
                var last_num = parseFloat(num.substr(-1));
                if (last_num == 1) string += 'миллион ';
                else if (last_num > 1 && last_num < 5) string += 'миллиона ';
                else string += 'миллионов ';
            break;
            case 3:
                var last_num = parseFloat(num.substr(-1));
                if (last_num == 1) string += 'миллиард ';
                else if (last_num > 1 && last_num < 5) string += 'миллиарда ';
                else string += 'миллиардов ';
            break;
            }
            string = string.replace('  ', ' ');
            return string;
        }
        
        function decimals_parser(num) {
            var first_num = num.substr(0, 1);
            var second_num = parseFloat(num.substr(1, 2));
            var string = ' ' + first_num + second_num;
            if (second_num == 1) string += ' копейка';
            else if (second_num > 1 && second_num < 5) string += ' копейки';
            else string += ' копеек';
            return string;
        }
        if (!number || number == 0) return false;
        if (typeof number !== 'number') {
            number = number.replace(',', '.');
            number = parseFloat(number);
            if (isNaN(number)) return false;
        }
        number = number.toFixed(2);
        if(number.indexOf('.') != -1) {
            var number_arr = number.split('.');
            var number = number_arr[0];
            var number_decimals = number_arr[1];
        }
        var number_length = number.length;
        var string = '';
        var num_parser = '';
        var count = 0;
        for (var _p = (number_length - 1); _p >= 0; _p--) {
            var num_digit = _number.substr(_p, 1);
            num_parser = num_digit +  num_parser;
            if ((num_parser.length == 3 || _p == 0) && !isNaN(parseFloat(num_parser))) {
                string = number_parser(num_parser, count) + string;
                num_parser = '';
                count++;
            }
        }
        if (number_decimals) string += decimals_parser(number_decimals);
        return string;
}
