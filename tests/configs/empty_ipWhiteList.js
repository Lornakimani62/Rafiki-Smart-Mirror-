/* Magic Mirror Test config sample ipWhitelist
 *
 */

var config = {
	port: 8080,
	ipWhitelist: [],

	language: "en",
	timeFormat: 24,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [

		{
			module: 'aiclient',
			position: 'middle_center' // This can be any of the regions.
		},
		{
			module: 'aiclientdebugger',
			position: 'bottom_right'
		},
		{
			module: "calendar",
			header: "EVENTS",
			position: "bottom_left",
			config: {
				colored: true,
				coloredSymbolOnly: false,
				calendar: [
					{
						url: 'https://calendar.google.com/calendar/',
						symbol: 'calendar-check',
						auth: {
							user: 'vinny',
							pass: 'python3.6',
							method: 'basic'
						}
					},
				],
			}
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'magicmirror',
			position: 'bottom_left',
			config: {
				text: 'magicmirror'
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				appid: "14f20d9ad2a2cb6953eab743cecfce43", //openweathermap.org API key.
				location: "Nairobi",
				locationID: "184745",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk",
					},
				]
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				type: 'current'
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				appid: "14f20d9ad2a2cb6953eab743cecfce43", //openweathermap.org API key.
				location: "Nairobi",
				locationID: "184745",  //ID from https://openweathermap.org/city
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
