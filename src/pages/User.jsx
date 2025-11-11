import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalEditProfile } from '../components/ModalEditProfile';
import { useGetUser } from '../hooks/useGetUser';

export const User = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleEditProfile = () => setIsModalOpen(!isModalOpen);

	useGetUser();
	const { firstName, lastName } = useSelector((state) => state.user);

	return (
		<div className='user-page bg-dark'>
			<div className='user-page__header'>
				<h1 className='user-page__header-title'>
					Welcome back <br />
					<span className='user-page__header-name'>{firstName} </span>
					<span className='user-page__header-name'>{lastName}</span>
				</h1>
				<button
					type='button'
					className='user-page__form-button'
					onClick={handleEditProfile}
				>
					Update
				</button>
			</div>

			{isModalOpen && (
				<ModalEditProfile
					onClose={handleEditProfile}
					userInfo={{ firstName, lastName }}
				/>
			)}
			<div className='user-page__header'></div>
			<div className='user-page__accounts'>
				<article className='account'>
					<div className='account__content'>
						<h2 className='account__title'>Checking (x8349)</h2>
						<p className='account__amount'>$2,082.79</p>
						<p className='account__amount-description'>Available Balance</p>
					</div>
					<div className='account__content--cta'>
						<button className='account__transaction-button'>View transactions</button>
					</div>
				</article>
				<article className='account'>
					<div className='account__content'>
						<h2 className='account__title'>Savings (x6712)</h2>
						<p className='account__amount'>$10,928.42</p>
						<p className='account__amount-description'>Available Balance</p>
					</div>
					<div className='account__content--cta'>
						<button className='account__transaction-button'>View transactions</button>
					</div>
				</article>
				<article className='account'>
					<div className='account__content'>
						<h2 className='account__title'>Argent Bank Credit Card (x8349)</h2>
						<p className='account__amount'>$184.30</p>
						<p className='account__amount-description'>Current Balance</p>
					</div>
					<div className='account__content--cta'>
						<button className='account__transaction-button'>View transactions</button>
					</div>
				</article>
			</div>
		</div>
	);
};
