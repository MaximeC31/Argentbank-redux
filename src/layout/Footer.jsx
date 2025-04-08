export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<p className='footer__text'>Copyright {currentYear} Argent Bank</p>
		</footer>
	);
};
