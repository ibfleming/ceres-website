import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Globe from 'react-globe.gl';
import earthImage from '../assets/imgs/earth.jpg';
import earthBumpImage from '../assets/imgs/clouds.png';
import cloudsImage from '../assets/imgs/clouds.png';
// import * as THREE from 'three';

const MAP_CENTER = { lat: 20, lng: -75, altitude: 2 };

const World = ({ currentView }) => {
	const globeRef = useRef();

	const initializeGlobe = () => {
		if (globeRef.current.initialized) return;
		const globe = globeRef.current;
		if (!globe) return;

		// Controls
		const controls = globe.controls();
		controls.enableRotate = true;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.35;
		controls.enableZoom = false;
		controls.enablePan = false;

		// Perspective
		globe.pointOfView(MAP_CENTER, 0);

		// Renderer
		const renderer = globe.renderer();
		renderer.setPixelRatio(1);
		renderer.shadowMap.enabled = false;
		renderer.antialias = false;

		/* Clouds [Optional]
		const CLOUDS_IMG = cloudsImage;
		const CLOUDS_ALT = 0.01;

		const textureLoader = new THREE.TextureLoader();
		textureLoader.load(CLOUDS_IMG, (cloudsTexture) => {
			const cloudsMaterial = new THREE.MeshPhongMaterial({
				map: cloudsTexture,
				transparent: true,
				opacity: 0.1,
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
		*/

		globeRef.current.initialized = true;
	};

	useEffect(() => {
		initializeGlobe();
	}, []);

	function getRandomAltitude() {
		const min = 0.075;
		const max = 0.2;
		return Math.random() * (max - min) + min;
	}

	const pointsData =
		currentView === 'Contact'
			? [
					{
						lat: 44.240459,
						lng: -114.478828,
						color: '#FFA500',
						altitude: getRandomAltitude(),
					}, // Idaho
					{
						lat: 36.116203,
						lng: -119.681564,
						color: '#FFB6C1',
						altitude: getRandomAltitude(),
					}, // California
					{
						lat: 33.729759,
						lng: -111.431221,
						color: '#E0FFFF',
						altitude: getRandomAltitude(),
					}, // Arizona
					{
						lat: 38.313515,
						lng: -117.055374,
						color: '#FFFF00',
						altitude: getRandomAltitude(),
					}, // Nevada
					{
						lat: 44.572021,
						lng: -122.070938,
						color: '#9400D3',
						altitude: getRandomAltitude(),
					}, // Oregon
					{
						lat: 40.150032,
						lng: -111.862434,
						color: '#ADFF2F',
						altitude: getRandomAltitude(),
					}, // Utah
					{
						lat: 47.400902,
						lng: -121.490494,
						color: '#FF7F50',
						altitude: getRandomAltitude(),
					}, // Washington
					{
						lat: 46.921925,
						lng: -110.454353,
						color: '#32CD32',
						altitude: getRandomAltitude(),
					}, // Montana
					{
						lat: 42.755966,
						lng: -107.302491,
						color: '#5F9EA0',
						altitude: getRandomAltitude(),
					}, // Wyoming
					{
						lat: 34.840515,
						lng: -106.248482,
						color: '#800080',
						altitude: getRandomAltitude(),
					}, // New Mexico
					{
						lat: 39.059811,
						lng: -105.311104,
						color: '#DB7093',
						altitude: getRandomAltitude(),
					}, // Colorado
			  ]
			: [];

	return (
		<div className='logo'>
			<div className='flex relative w-fit'>
				<Globe
					ref={globeRef}
					onGlobeReady={initializeGlobe}
					width={250}
					height={250}
					// Images
					globeImageUrl={earthImage}
					bumpImageUrl={earthBumpImage}
					cloudsImage={cloudsImage}
					backgroundColor='rgba(0,0,0,0)'
					showAtmosphere={true}
					atmosphereColor='rgb(207, 222, 231)'
					enableGlobeGlow={false}
					enableBackground={false}
					enableClouds={true}
					animateIn={true}
					// Points
					pointsData={pointsData}
					pointLat='lat'
					pointLng='lng'
					pointColor='color'
					pointAltitude='altitude'
					pointRadius={0.33}
					enablePointerInteraction={false}
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

World.propTypes = {
	currentView: PropTypes.string.isRequired,
};

export default World;
