import Globe from './Globe';

const Header = () => {
	return (
		<header>
			<section className='w-full h-8 bg-black'></section>
			<Globe />
			<section className='w-full h-16 spacer-gradient-bottom'></section>
		</header>
	);
};

export default Header;
