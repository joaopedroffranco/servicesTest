var request = require('request-json')
var constants = require('../constants')
var handler = require('../handler')

client = request.createClient(constants.api)
client.headers['Authorization'] = constants.token

module.exports = {
	liveData: function() {
		client
		.get(constants.simulcast)
		.then(function(response){
			console.log('Simulcast:')
			const live = JSON.parse(response.res.body).results[0]
			const status = response.res.status

			if (!handler.error()){
				const thumb_cms = live.thumb_cms
				const title_cms = live.title_cms
				if (thumb_cms != null && title_cms != null){
					console.log('.')
				} else {
					console.log('-')
				}
			}
		})
	}
}