// src/Globe.jsx

import { useEffect, useRef, useMemo, useCallback } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import '../src/styles/Globe.css';
import '../src/styles/fonts.css';

const World = () => {
	const globeRef = useRef();
	const MAP_CENTER = useMemo(() => ({ lat: 10, lng: 0, altitude: 2 }), []);

	const initializeGlobe = useCallback(() => {
		if (globeRef.current.initialized) return;
		const globe = globeRef.current;
		if (!globe) return;

		// Controls
		const controls = globe.controls();
		controls.enableRotate = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.3;
		controls.enableZoom = false;
		controls.enablePan = false;

		// Perspective
		globe.pointOfView(MAP_CENTER, 0);

		// Renderer
		const renderer = globe.renderer();
		renderer.setPixelRatio(1);
		renderer.shadowMap.enabled = false;
		renderer.antialias = false;

		// Clouds
		const CLOUDS_IMG = '/src/assets/clouds.png';
		const CLOUDS_ALT = 0.01;

		const textureLoader = new THREE.TextureLoader();
		textureLoader.load(CLOUDS_IMG, (cloudsTexture) => {
			const cloudsMaterial = new THREE.MeshPhongMaterial({
				map: cloudsTexture,
				transparent: true,
				opacity: 0.25,
				depthWrite: false,
			});
			const cloudsGeometry = new THREE.SphereGeometry(
				globe.getGlobeRadius() * (1 + CLOUDS_ALT),
				32,
				32
			);
			const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
			globe.scene().add(clouds);
		});
		globeRef.current.initialized = true;
	}, [MAP_CENTER]);

	useEffect(() => {
		initializeGlobe();
	}, [initializeGlobe]);

	return (
		<div className='logo'>
			<div className='flex relative w-fit'>
				<Globe
					ref={globeRef}
					onGlobeReady={initializeGlobe}
					width={250}
					height={250}
					// Images
					globeImageUrl='src/assets/earth-detail.jpg'
					bumpImageUrl='src/assets/earth-topology.png'
					backgroundColor='rgba(0,0,0,0)'
					showAtmosphere={false}
					enableGlobeGlow={false}
					enableBackground={false}
					enableClouds={false}
					animateIn={true}
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

export default World;
