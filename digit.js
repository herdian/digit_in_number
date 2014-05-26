function findDigit(n,number,digit) {
	var number_length = number.toString().length;
	digit = digit + number_length;
	
	if( digit >= n ) {
		return {'digit':digit,'number':number};
	}else {
		return findDigit(n,number+1,digit);
	}
}

var result = findDigit(process.argv[2],1,0);

var string_res_number = result.number.toString();
var margin = result.digit - process.argv[2];
var position = string_res_number.length-margin;
var digit_value = string_res_number[ position-1 ];

console.log( 'Digit ke '+ process.argv[2] + ' adalah '+ digit_value +' angka ke '+ position +' pada angka '+ result.number);