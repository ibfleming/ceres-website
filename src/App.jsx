import { useEffect, useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Globe from './components/Globe';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
	const [yAxisValue, setScrollY] = useState(0);
	const [currentView, setCurrentView] = useState('Home');

	useEffect(() => {
		const handleScroll = () => {
			const parentHeight =
				document.getElementById('nav-parent').clientHeight;
			const navElement = document.getElementById('nav');
			const navHeight = navElement.clientHeight;
			if (parentHeight > navHeight + window.scrollY) {
				navElement.classList.add('nav-animation');
				setScrollY(window.scrollY / 1.1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentView]);

	const nodeRef = useRef(null);

	const renderView = () => {
		switch (currentView) {
			case 'Home':
				return <Home />;
			case 'Services':
				return <Services />;
			case 'Contact':
				return <Contact />;
			default:
				return null;
		}
	};

	return (
		<div className='app-container'>
			<section className='w-full h-8 bg-black'></section>
			<Globe currentView={currentView} />
			<section className='w-full h-16 spacer-gradient-bottom'></section>
			<div
				id='nav-parent'
				className='flex items-center justify-center flex-1 w-full bg-secondary my-12'
			>
				<div className='flex w-4/6 mx-auto h-max overflow-visible'>
					<nav
						id='nav'
						className='flex-row w-fit h-full max-h-screen items-start justify-start p-16'
						style={{
							transform: `translateY(${yAxisValue}px)`,
						}}
					>
						<Navigation setCurrentView={setCurrentView} />
					</nav>
					<SwitchTransition>
						<CSSTransition
							nodeRef={nodeRef}
							key={currentView}
							timeout={500}
							classNames='fade'
							unmountOnExit
						>
							<div ref={nodeRef}>{renderView()}</div>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
