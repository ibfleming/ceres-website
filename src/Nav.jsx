import '../src/styles/Nav.css';

export default function Navigation() {
	return (
		<ul className='flex-row w-full'>
			<li className='flex'>
				<button className='button-28'>Home</button>
			</li>
			<li className='flex mt-8'>
				<button className='button-28'>Services</button>
			</li>
			<li className='flex mt-8'>
				<button className='button-28'>Contact</button>
			</li>
		</ul>
	);
}
