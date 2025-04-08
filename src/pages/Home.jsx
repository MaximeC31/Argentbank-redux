export const Home = () => {
	return (
		<section className='home'>
			<div className='home__hero'>
				<div className='home__hero-content'>
					<h2 className='sr-only'>Promoted Content</h2>
					<p className='home__hero-subtitle'>No fees.</p>
					<p className='home__hero-subtitle'>No minimum deposit.</p>
					<p className='home__hero-subtitle'>High interest rates.</p>
					<p className='home__hero-text'>Open a savings account with Argent Bank today!</p>
				</div>
			</div>

			<div className='home__features'>
				<h2 className='sr-only'>Features</h2>
				<article className='feature'>
					<img
						src='/icon-chat.png'
						alt='Customer Service Icon'
						className='feature__icon'
					/>
					<h3 className='feature__title'>You are our #1 priority</h3>
					<p className='feature__text'>
						Need to talk to a representative? You can get in touch through our 24/7 chat or through
						a phone call in less than 5 minutes.
					</p>
				</article>
				<article className='feature'>
					<img
						src='/icon-money.png'
						alt='Money Icon'
						className='feature__icon'
					/>
					<h3 className='feature__title'>More savings means higher rates</h3>
					<p className='feature__text'>
						The more you save with us, the higher your interest rate will be!
					</p>
				</article>
				<article className='feature'>
					<img
						src='/icon-security.png'
						alt='Security Icon'
						className='feature__icon'
					/>
					<h3 className='feature__title'>Security you can trust</h3>
					<p className='feature__text'>
						We use top of the line encryption to make sure your data and money is always safe.
					</p>
				</article>
			</div>
		</section>
	);
};
