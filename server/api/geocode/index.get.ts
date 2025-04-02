import MapboxClient from '@mapbox/mapbox-sdk/services/geocoding.js'

export default defineEventHandler(async (event) => {
	const query = getQuery(event);

	if (!query.city) {
		throw createError({
			statusCode: 400,
			statusMessage: 'City parameter is required'
		});
	}

	const config = useRuntimeConfig();
	
	const geocodingService = MapboxClient({
		accessToken: config.public.mapboxApiKey
	});

	try {
		const response = await geocodingService.forwardGeocode({
			query: query.city as string,
			mode: 'mapbox.places',
			autocomplete: true,
			limit: 1,
			proximity: 'ip',
			types: ['place']
		}).send();

		return response.body;
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Geocoding failed'
		});
	}
});