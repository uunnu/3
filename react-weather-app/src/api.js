export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

fetch('/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));