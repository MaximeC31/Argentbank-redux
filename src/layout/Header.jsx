import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { clearToken } from '../store/authSlice';
import { clearUserProfile } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const token = useSelector((state) => state.auth.token);
	const { firstName } = useSelector((state) => state.user);

	const handleSignOut = () => {
		dispatch(clearToken());
		dispatch(clearUserProfile());
		navigate('/');
	};

	return (
		<header className='header'>
			<Link
				className='header__logo'
				to='/'
			>
				<img
					className='header__logo-image'
					src='/logo.png'
					alt='Argent Bank Logo'
				/>
			</Link>
			{token ? (
				<div className='header__nav'>
					<Link
						className='header__nav-item'
						to='/user'
					>
						<FontAwesomeIcon
							icon={faUserCircle}
							style={{ marginRight: '8px' }}
						/>
						{firstName}
					</Link>
					<Link
						className='header__nav-item'
						onClick={handleSignOut}
						to='/'
					>
						<FontAwesomeIcon
							icon={faRightFromBracket}
							style={{ marginRight: '8px' }}
						/>
						Sign Out
					</Link>
				</div>
			) : (
				<div className='header__nav'>
					<Link
						className='header__nav-item'
						to='/sign-in'
					>
						<FontAwesomeIcon
							icon={faUserCircle}
							style={{ marginRight: '8px' }}
						/>
						Sign In
					</Link>
				</div>
			)}
		</header>
	);
};
