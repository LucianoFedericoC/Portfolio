import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import DarkModeSwitch from './darkModeSwitch';

const HamburguerMenu = ({ section2 }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full dark:bg-white bg-black transition ease transform duration-300`;
	const HMenu: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const ButtonMenu: React.RefObject<HTMLButtonElement> =
		useRef<HTMLButtonElement>(null);

	const handleSection = (e: any, section: any) => {
		e.preventDefault();
		window.scrollTo({
			top: section.current.offsetTop - 0,
			behavior: 'smooth',
		});
		setIsOpen(false);
	};

	useEffect(() => {
		const handleOutsideClick = (e: any) => {
			e.preventDefault();
			if (
				HMenu.current &&
				!HMenu.current.contains(e.target) &&
				!ButtonMenu.current?.contains(e.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	});

	return (
		<div className={`flex md:hidden items-end justify-center w-full h-14 dark:bg-portfolio-black bg-portfolio-antiFlashWhite flex-col z-40 ${isOpen ? 'sticky top-0': ''}`}>
			<button
				ref={ButtonMenu}
				className='flex flex-col h-12 w-12 m-2 border-0.5 border-white rounded justify-center items-center group z-40'
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? 'rotate-45 translate-y-[0.4px] opacity-50 group-hover:opacity-100'
							: ''
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen ? 'opacity-0' : ''
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
							: ''
					}`}
				/>
			</button>
			{isOpen ? (
				<>
					<div className='fixed w-full top-0 left-0 z-20 h-full bg-gray-800/5 backdrop-blur-sm overflow-hidden' />
					<aside
						ref={HMenu}
						className='fixed z-30 top-0 dark:bg-black bg-gray-300 dark:bg-opacity-80 bg-opacity-90 w-full smartphone_200px:h-[40%] smartphone_380px:h-[34%] smartphone_400px:h-[35%] smartphone_500px:h-[40%] pt-10 animate-fade-left animate-duration-[1500ms]'>
						<div className='fixed top-0 h-12 w-12 m-2'>
							<DarkModeSwitch />
						</div>
						<ul className='flex items-center p-5 text-center gap-y-8 flex-col w-full'>
							<li className='border-y border-[#3e7187] w-[85%] py-1'>
								<button
									onClick={(e) => handleSection(e, section2)}
									className='w-48'>
									<p className='dark:text-portfolio-antiFlashWhite text-portfolio-black'>
										Projects
									</p>
								</button>
							</li>
							<li className='border-y border-[#3e7187] w-[85%] py-1'>
								<Link href='/contact'>
									<p className='dark:text-portfolio-antiFlashWhite text-portfolio-black'>
										Contact
									</p>
								</Link>
							</li>
							<li className='border-y border-[#3e7187] w-[85%] py-1'>
								<Link href='#'>
									<p className='dark:text-portfolio-antiFlashWhite text-portfolio-black'>
										Resumen
									</p>
								</Link>
							</li>
						</ul>
					</aside>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default HamburguerMenu;
