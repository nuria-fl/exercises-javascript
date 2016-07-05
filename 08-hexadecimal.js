function getRGB(color){
	hex = color.split('');
	
	red = hex[1]+hex[2];
	green = hex[3]+hex[4];
	blue = hex[5]+hex[6];
	red = parseInt(red, 16);
	green = parseInt(green, 16);
	blue = parseInt(blue, 16);

	rgbColor = 'rgb('+red+','+green+','+blue+')';

	return rgbColor;
}