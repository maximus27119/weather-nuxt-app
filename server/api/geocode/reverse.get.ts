import MapboxClient from '@mapbox/mapbox-sdk/services/geocoding'

export default defineEventHandler(async (event) => {
	const query = getQuery(event);

	if (!query.lat || !query.lon) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Latitude and longitude parameters are required'
		});
	} else if (isNaN(Number(query.lat)) || isNaN(Number(query.lon))) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid coordinates'
		})
	}

	const config = useRuntimeConfig();
	
	const geocodingService = MapboxClient({
		accessToken: config.public.mapboxApiKey
	});

	try {
		const response = await geocodingService.reverseGeocode({
				query: [Number(query.lon), Number(query.lat)],
				mode: 'mapbox.places',
				// reverseMode: 'distance',
				limit: 1,
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