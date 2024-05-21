// src/Globe.jsx

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './Globe.css';
import '../src/styles/fonts.css';

const GlobeComponent = () => {
	const globeEl = useRef();

	useEffect(() => {
		const MAP_CENTER = { lat: 10, lng: 0, altitude: 4 };
		globeEl.current.pointOfView(MAP_CENTER, 0);

		const controls = globeEl.current.controls();
		controls.enableRotate = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.5;
		controls.enableZoom = false;
		controls.enablePan = false;
	}, []);

	return (
		<div className='parent-wrapper drop-shadow-xl'>
			<div className='globe-container'>
				<Globe
					ref={globeEl}
					globeImageUrl='src/assets/earth-detail.jpg'
					bumpImageUrl='src/assets/earth-topology.png'
					backgroundColor='rgba(0,0,0,0)'
					showAtmosphere={false}
					width={250}
					height={500}
					enableGlobeGlow={false}
					enableBackground={false}
					enableClouds={false}
				/>
			</div>
			<div className='ml-5'>
				<div className='flex items-end'>
					<h1 className='font-sofachrome italic text-secondary text-5xl'>
						CERES,
					</h1>
					<h1 className='font-sofachrome italic text-secondary text-2xl ml-3'>
						Corp.
					</h1>
				</div>
				<div className='flex pl-2'>
					<h1 className=' text-secondary text-sm mt-2 tracking-wide'>
						Professional, Cost-effective Environmental Services
					</h1>
				</div>
			</div>
		</div>
	);
};

export default GlobeComponent;
