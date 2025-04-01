import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	const mapboxGeocodingService = mbxGeocoding({
		accessToken: config.public.mapboxApiKey
	});

	return {
		provide: {
			mapbox: {
				getSuggestions: async (city) => {
					return mapboxGeocodingService.forwardGeocode({
						query: city,
						mode: 'mapbox.places',
						autocomplete: true,
						limit: 5,
						proximity: 'ip',
						types: ['place']
					}).send();
				},
				geocode: async (city) => {
					return mapboxGeocodingService.forwardGeocode({
						query: city,
						mode: 'mapbox.places',
						autocomplete: true,
						limit: 1,
						proximity: 'ip',
						types: ['place']
					}).send();
				},
				reverseGeocode: async (longitude, latitude) => {
					return mapboxGeocodingService.reverseGeocode({
						query: [longitude, latitude],
						mode: 'mapbox.places',
						reverseMode: 'distance',
						limit: 1,
						types: ['place']
					}).send();
				}
			}
		}
	}
});