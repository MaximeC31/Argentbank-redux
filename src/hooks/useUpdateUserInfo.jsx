import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../store/userSlice';
import { updateUserProfile } from '../utils/api.js';

export const useUpdateUserInfo = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);

	return async (firstName, lastName) => {
		try {
			await updateUserProfile(token, firstName, lastName);
			dispatch(
				setUserProfile({
					firstName: firstName,
					lastName: lastName,
				}),
			);
		} catch (error) {
			console.error(error);
		}
	};
};
