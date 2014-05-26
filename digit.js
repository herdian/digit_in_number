findDigit = function(n,number,digit) {
	var number_length = number.toString().length;
	digit = digit + number_length;
	
	if( digit >= n ) {

		var string_res_number = number.toString();
		var margin = digit - process.argv[2];
		var position = string_res_number.length-margin;
		var digit_value = string_res_number[ position-1 ];
	
		return {
			'n':n,
			'answer':digit_value,
			'position':position,
			'number':number
		};
	}else {
		return findDigit(n,number+1,digit);
	}
}

var result = findDigit(process.argv[2],1,0);

console.log( 'Digit ke '+ result.n + ' adalah '+ result.answer +' angka ke '+ result.position +' pada angka '+ result.number);