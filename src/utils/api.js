import { publicPOST, privatePOST, privatePUT } from './fetcher.js';

export const loginUser = async (username, password) => {
	const URL = 'http://localhost:3001/api/v1/user/login';
	const body = {
		email: username,
		password: password,
	};

	return await publicPOST(URL, body);
};

export const getUserProfile = async (token) => {
	const URL = 'http://localhost:3001/api/v1/user/profile';
	return await privatePOST(URL, token);
};

export const updateUserProfile = async (token, firstName, lastName) => {
	const URL = 'http://localhost:3001/api/v1/user/profile';
	const body = {
		firstName: firstName,
		lastName: lastName,
	};
	return await privatePUT(URL, token, body);
};
