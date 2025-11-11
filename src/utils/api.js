import { publicPOST, privatePOST, privatePUT } from './fetcher.js';

// Mock users data for offline mode
const mockUsers = {
	'tony@stark.com': {
		password: 'password123',
		token: 'mock-token-tony-stark',
		firstName: 'Tony',
		lastName: 'Stark'
	},
	'steve@rogers.com': {
		password: 'password456',
		token: 'mock-token-steve-rogers',
		firstName: 'Steve',
		lastName: 'Rogers'
	}
};

// Helper function to get user from token
const getUserFromToken = (token) => {
	const users = Object.values(mockUsers);
	return users.find(user => user.token === token);
};

export const loginUser = async (username, password) => {
	const URL = 'http://localhost:3001/api/v1/user/login';
	const body = {
		email: username,
		password: password,
	};

	try {
		return await publicPOST(URL, body);
	} catch (error) {
		// If server is unreachable, check mock credentials
		const mockUser = mockUsers[username.toLowerCase()];
		if (mockUser && mockUser.password === password) {
			return {
				status: 200,
				message: 'User successfully logged in',
				body: {
					token: mockUser.token
				}
			};
		}
		throw error;
	}
};

export const getUserProfile = async (token) => {
	const URL = 'http://localhost:3001/api/v1/user/profile';

	try {
		return await privatePOST(URL, token);
	} catch (error) {
		// If server is unreachable, return mock user data based on token
		const mockUser = getUserFromToken(token);
		if (mockUser) {
			return {
				status: 200,
				message: 'User profile retrieved successfully',
				body: {
					firstName: mockUser.firstName,
					lastName: mockUser.lastName
				}
			};
		}
		throw error;
	}
};

export const updateUserProfile = async (token, firstName, lastName) => {
	const URL = 'http://localhost:3001/api/v1/user/profile';
	const body = {
		firstName: firstName,
		lastName: lastName,
	};

	try {
		return await privatePUT(URL, token, body);
	} catch (error) {
		// If server is unreachable, simulate successful update for mock users
		const mockUser = getUserFromToken(token);
		if (mockUser) {
			// Update the mock user data
			mockUser.firstName = firstName;
			mockUser.lastName = lastName;

			return {
				status: 200,
				message: 'User profile successfully updated',
				body: {
					firstName: firstName,
					lastName: lastName
				}
			};
		}
		throw error;
	}
};
