import Globe from './Globe';

export default function App() {
	return (
		<div>
			<Globe />
			<nav className='flex w-full'>
				<ul className='flex w-full'>
					<li className='flex-1'>
						<button className='w-full tracking-wider'>Home</button>
					</li>
					<li className='flex-1'>
						<button className='w-full tracking-wider'>Services</button>
					</li>
					<li className='flex-1'>
						<button className='w-full tracking-wider'>Contact</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
