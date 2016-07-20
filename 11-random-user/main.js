var countries = {
	AU: "Australia",
	BR: "Brazil",
	CA: "Canada",
	CH: "Switzerland",
	DE: "Germany",
	DK: "Denmark",
	ES: "Spain",
	FI: "Finland",
	FR: "France",
	GB: "United Kingdom",
	IE: "Ireland",
	IR: "Iran",
	NL: "Netherlands",
	NZ: "New Zealand",
	TR: "Turkey",
	US: "United States of America"
};

// add zero if the day/month is just one digit
function addZero(n){return n<10? '0'+n:''+n;}

function getUser(){

	var now = new Date();
	$('.now').text(now);

	$.ajax({
		url: 'https://randomuser.me/api/',
	})
	.done(function( userData ) {

		var user = userData.results[0];
		var dob = new Date(user.dob*1000);
		var registered = new Date(user.registered*1000);
		var natLowercase = user.nat.toLowerCase(); // transform nationality to lowercase so the class of flag-icon works
		var natCountry = countries[user.nat]; // get full country name from countries object

		$('.full-name').text( user.name.title + ' ' + user.name.first + ' ' + user.name.last );

		$('.img-thumbnail').attr('src', user.picture.thumbnail );

		// add 1 to months because getMonth returns number between 0 and 11
		$('.registration-date').text(addZero(registered.getDate()) + '/' + addZero(registered.getMonth()+1) + '/' + registered.getFullYear());
		$('.born-date').text(addZero(dob.getDate()) + '/' + addZero(dob.getMonth()+1) + '/' + dob.getFullYear());

		$('.nationality span').text(natCountry);
		$('.nationality i').attr('class', 'flag-icon flag-icon-' + natLowercase );

		$('.gender').text(user.gender);

		$('.address').html(user.location.street + '<br>' + user.location.postcode + '<br>' + user.location.city  + '<br>' + user.location.state);

		$('.email').text(user.email).attr('href','mailto:'+user.email);

		$('.phone').html('Cell: '+ user.cell + '<br> Phone: '+ user.phone );

	})
}

getUser();

$('.get-profile').click(function(){
	getUser();	
})