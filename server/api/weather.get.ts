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

	try {
		const response = await $fetch(
			`${config.public.weatherApiUrl}?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${config.public.apiKey}`,
		);
		
		return response;
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Weather fetching failed'
		});
	}
});