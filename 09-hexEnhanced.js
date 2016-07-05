function getRGBEnhanced(color){
	hex = color.split('');

	red = parseInt(hex[1]+hex[2], 16);
	green = parseInt(hex[3]+hex[4], 16);
	blue = parseInt(hex[5]+hex[6], 16);

	rgbColor = 'rgb('+red+','+green+','+blue+')';

	switch(color){
		case '#000000':
			return rgbColor + ' black';
			break;
		case '#FFFFFF':
			return rgbColor + ' white';
			break;
		case '#FF0000':
			return rgbColor + ' red';
			break;
		case '#00FF00':
			return rgbColor + ' green';
			break;
		case '#0000FF':
			return rgbColor + ' blue';
			break;
		default:
			return rgbColor;
			break;
	}	
}