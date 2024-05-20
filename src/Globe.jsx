// src/Globe.jsx

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const GlobeComponent = () => {
	const globeEl = useRef();

	useEffect(() => {
		// Configure globe settings
		globeEl.current.pointOfView({ altitude: 4 });
		globeEl.current.controls().autoRotate = true;
		globeEl.current.controls().autoRotateSpeed = 0.5;

		// Set globe background color
		globeEl.current.renderer().setClearColor(new THREE.Color(0x000000), 0);
	}, []);

	return (
		<div className='w-full h-64'>
			<Globe
				ref={globeEl}
				globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
				bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
				backgroundColor='rgba(0,0,0,0)'
			/>
		</div>
	);
};

export default GlobeComponent;
