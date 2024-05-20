// src/Globe.jsx

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './Globe.css';

const GlobeComponent = () => {
	const globeEl = useRef();

	useEffect(() => {
		const MAP_CENTER = { lat: 0, lng: 0, altitude: 4 };
		globeEl.current.pointOfView(MAP_CENTER, 0);

		const controls = globeEl.current.controls();
		controls.enableRotate = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 2;
		controls.enableZoom = false;
		controls.enablePan = false;
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (globeEl.current) {
				globeEl.current.width = window.innerWidth;
				globeEl.current.height = window.innerHeight;
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='parent-wrapper'>
			<div className='grid-container'>
				<div className='globe-container'>
					<Globe
						ref={globeEl}
						height={window.innerHeight}
						width={window.innerWidth}
						globeImageUrl='src/assets/earth-detail.jpg'
						bumpImageUrl='src/assets/earth-topology.png'
						backgroundColor='rgba(0,0,0,0)'
						showAtmosphere={true}
						//atmosphereColor='rgba(0, 0, 0, 0.5)'
					/>
				</div>
				<h1 className='title'>CERES</h1>
			</div>
		</div>
	);
};

export default GlobeComponent;
