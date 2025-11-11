import { useLoginUser } from '../hooks/useLoginUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const SignIn = () => {
	const loginUser = useLoginUser();
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		if (token) {
			navigate('/user');
		}
	}, [token, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const formObject = Object.fromEntries(form);
		loginUser(formObject.email, formObject.password);
	};

	return (
		<section className='signin bg-dark'>
			<div className='signin__content'>
				<FontAwesomeIcon
					icon={faUserCircle}
					style={{ marginRight: '8px' }}
					className='signin__icon'
				/>
				<h2 className='signin__title'>Sign In</h2>
				<form
					className='signin__form'
					onSubmit={handleSubmit}
				>
					<div className='signin__input-wrapper'>
						<label
							htmlFor='email'
							className='signin__label'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							className='signin__input'
							required
						/>
					</div>
					<div className='signin__input-wrapper'>
						<label
							htmlFor='password'
							className='signin__label'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							className='signin__input'
						/>
					</div>
					<button
						type='submit'
						className='signin__button'
					>
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
};
