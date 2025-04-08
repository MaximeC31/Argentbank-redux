import { useUpdateUserInfo } from '../hooks/useUpdateUserInfo';

export const ModalEditProfile = ({ onClose, userInfo }) => {
	const updateUserInfo = useUpdateUserInfo();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const updatedData = {
			firstName: form.get('firstName'),
			lastName: form.get('lastName'),
		};

		await updateUserInfo(updatedData.firstName, updatedData.lastName);
		onClose();
	};
	return (
		<div className='modal'>
			<div className='modal__content'>
				<button
					className='modal__close'
					onClick={onClose}
					aria-label='Close modal'
				>
					x
				</button>
				<form
					className='user-page__form'
					onSubmit={handleSubmit}
				>
					<h2 className='user-page__form-title'>Edit your profile</h2>
					<div className='user-page__input-wrapper'>
						<label
							htmlFor='firstName'
							className='user-page__label'
						>
							First Name
						</label>
						<input
							type='text'
							id='firstName'
							className='user-page__input'
							name='firstName'
							placeholder={userInfo.firstName}
						/>
					</div>
					<div className='user-page__input-wrapper'>
						<label
							htmlFor='lastName'
							className='user-page__label'
						>
							Last Name
						</label>
						<input
							type='text'
							id='lastName'
							className='user-page__input'
							name='lastName'
							placeholder={userInfo.lastName}
						/>
					</div>
					<button
						type='submit'
						className='user-page__form-button'
					>
						Save changes
					</button>
				</form>
			</div>
		</div>
	);
};
