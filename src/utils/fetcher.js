export const publicPOST = async (url, body) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw errorResponse.message;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw error.message || error;
	}
};

export const privatePOST = async (url, token) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw errorResponse.message;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw error.message || error;
	}
};

export const privatePUT = async (url, token, body) => {
	try {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			throw errorResponse.message;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw error.message || error;
	}
};
