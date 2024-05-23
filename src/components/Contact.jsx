export default function Contact() {
	return (
		<div className='w-full h-full p-16 border-l-2 border-primary'>
			<h1 className='text-4xl pb-4 font-semibold'>Contact Us</h1>
			<h2 className='text-2xl pb-4 font-light'>Office: 1-800-258-1490</h2>
			<div className='grid grid-cols-2 gap-x-72 pt-4'>
				<div>Environmental Services in:</div>
				<div>
					<ul>
						<li className='p-1'>California</li>
						<li className='p-1'>Arizona</li>
						<li className='p-1'>Nevada</li>
						<li className='p-1'>Oregon</li>
						<li className='p-1'>Utah</li>
						<li className='p-1'>Washington</li>
						<li className='p-1'>Idaho</li>
						<li className='p-1'>Montana</li>
						<li className='p-1'>Wyoming</li>
						<li className='p-1'>New Mexico</li>
						<li className='p-1'>Colorado</li>
					</ul>
				</div>
				<div className='mt-4'>Hours of Operation:</div>
				<div className='mt-4'>
					Monday-Friday
					<br />
					8:00 A.M. - 5.00 P.M. (PST)
				</div>
				<div className='mt-4'>FAX: 1-800-581-1490</div>
			</div>
		</div>
	);
}
