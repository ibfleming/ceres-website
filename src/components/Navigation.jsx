import PropTypes from 'prop-types';

Navigation.propTypes = {
	setCurrentView: PropTypes.func.isRequired,
};

export default function Navigation({ setCurrentView }) {
	return (
		<ul className='flex-row w-full h-fit'>
			<li className='flex'>
				<button
					className='ceres-button shadow-xl'
					onClick={() => setCurrentView('Home')}
				>
					Home
				</button>
			</li>
			<li className='flex mt-8'>
				<button
					className='ceres-button shadow-xl'
					onClick={() => setCurrentView('Services')}
				>
					Services
				</button>
			</li>
			<li className='flex mt-8'>
				<button
					className='ceres-button shadow-xl'
					onClick={() => setCurrentView('Contact')}
				>
					Contact
				</button>
			</li>
		</ul>
	);
}
