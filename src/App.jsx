import { useEffect, useState } from 'react';
import Globe from './Globe';
import Navigation from './Nav';
import Footer from './Footer';
import Home from './Home';

export default function App() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const parentHeight = document.querySelector('#body').offsetHeight;
			const navHeight = document.querySelector('nav').offsetHeight;
			const maxScrollY = parentHeight - navHeight;
			let newScrollY = window.scrollY;
			if (newScrollY > maxScrollY) {
				newScrollY = maxScrollY;
			}
			setScrollY(newScrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='app-container'>
			<section className='w-full h-8 bg-black'></section>
			<Globe />
			<section className='w-full h-16 section-bg-bottom'></section>
			<div className='flex items-center justify-center flex-1 w-full bg-secondary my-12'>
				<div id='body' className='flex w-4/6 mx-auto'>
					<nav
						className='flex-row w-fit items-start justify-start h-fit p-16 nav-animation'
						style={{
							transform: `translateY(${scrollY}px)`,
							position: `sticky`,
							top: `0`,
						}}
					>
						<Navigation />
					</nav>
					<Home />
					{/* Implement section routing here... */}
				</div>
			</div>
			<section className='w-full h-16 section-bg-top'></section>
			<Footer />
		</div>
	);
}
