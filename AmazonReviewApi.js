import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://amazon-review-scraping.p.rapidapi.com/getAmazReviews',
  params: {
    productId: 'B0CQ7RQ5RK',
    geoCode: 'de'
  },
  headers: {
    'X-RapidAPI-Key': 'a60b13a21emsh9e4a3be81546910p1467a9jsn1f5098069950',
    'X-RapidAPI-Host': 'amazon-review-scraping.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}