import ContactButton from './contactButton';

const Footer = () => {
	return (
		<>
			<div className='flex w-full h-36 bg-[#1c1d25] justify-center items-center'>
				<div className='container mx-auto px-4'>
					<div className='flex justify-around items-center'>
						LOGO
						<div className='hidden md:block'></div>
						<ContactButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
