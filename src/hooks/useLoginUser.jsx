import { loginUser } from '../utils/api.js';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';

export const useLoginUser = () => {
	const dispatch = useDispatch();

	return async (email, password) => {
		try {
			const result = await loginUser(email, password);
			const token = result.body.token;

			dispatch(setToken(token));
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};
};
