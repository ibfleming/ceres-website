import Globe from './Globe';

export default function App() {
	return (
		<div>
			<Globe />
			<nav className='flex w-full mt-12'>
				<ul className='flex w-full'>
					<li className='flex-1'>
						<button className='w-full tracking-wider font-semibold'>
							Home
						</button>
					</li>
					<li className='flex-1'>
						<button className='w-full tracking-wider font-semibold'>
							Services
						</button>
					</li>
					<li className='flex-1'>
						<button className='w-full tracking-wider font-semibold'>
							Contact
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
