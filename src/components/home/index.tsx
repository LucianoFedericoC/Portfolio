'use client';
import Link from 'next/link';
import logo from '../../assets/SVG/logo.svg';
import linkedIn from '../../assets/SVG/iconsLight/linkedin.svg';
import gitHub from '../../assets/SVG/iconsLight/github.svg';
import gmail from '../../assets/SVG/iconsLight/gmail.svg';
import gmailDark from '../../assets/SVG/iconsDark/gmailDark.svg';
import gitHubDark from '../../assets/SVG/iconsDark/githubDark.svg';
import linkedInDark from '../../assets/SVG/iconsDark/linkedinDark.svg';
import upArrow from '../../assets/SVG/iconsLight/upArrow.svg';
import Navbar from '../navigation/nav/navBar';
import Image from 'next/image';
import handleSection from '../../utils/sectioned';
import HamburguerMenu from '../navigation/nav/hamburguerMenu';
import { useRef, useEffect, useState } from 'react';
import { SectionRef } from './domain/home/home.interface';
import Projects from '../projects';
import AboutMe from '../aboutMe';
import Loader from '../loader/pageLoader';
import { useTheme } from 'next-themes';

const Home = () => {
	const section_1 = useRef<SectionRef>(null);
	const section_2 = useRef(null);

	const [showButton, setShowButton] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [resolvedTheme, setResolvedTheme] = useState('light');

	const { resolvedTheme: currentTheme }: any =
		typeof window !== 'undefined' ? useTheme() : { resolvedTheme: 'light' };

	useEffect(() => {
		setResolvedTheme(currentTheme);
		setIsLoading(false);
	}, [currentTheme]);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY + window.innerHeight <=
				(section_1.current?.offsetTop ?? 0) - 0
			) {
				setShowButton(false);
			} else {
				setShowButton(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{!isLoading ? (
				<div className='w-full h-full'>
					<Navbar section2={section_2} />
					<HamburguerMenu section2={section_2} />
					<header className='dark:bg-portfolio-black bg-portfolio-antiFlashWhite h-screen w-full flex justify-center items-center'>
						<Image
							className='absolute flex md:top-[40%] md:left-[45%] left-[25%] top-[20%] md:size-max size-2/4 opacity-60 animate-fade animate-once animate-duration-[3000ms] animate-ease-in'
							src={logo}
							alt='logo'
						/>
						<div className='absolute w-full h-full flex items-center justify-around md:flex-row flex-col z-10'>
							<div className='md:w-2/4 md:mx-auto flex flex-col animate-fade-right animate-once animate-duration-[1500ms]'>
								<div className='inline-block relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
									<h1 className='font-black dark:text-portfolio-antiFlashWhite text-portfolio-black md:text-6xl text-5xl mb-5'>
										Luciano Carducci
									</h1>
								</div>
								<div className='inline-block relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
									<h3 className='md:text-2xl dark:text-portfolio-antiFlashWhite text-portfolio-black text-sm mb-5'>
										Full stack web developer
									</h3>
								</div>
								<div className='flex relative pt-3 pr-3 overflow-hidden md:ml-0 ml-4'>
									<button
										onClick={(e) =>
											handleSection(e, section_1)
										}
										className='flex w-28 h-12 justify-center items-center dark:text-portfolio-antiFlashWhite text-portfolio-black bg-portfolio-orange font-semibold rounded-md hover:scale-90 duration-300'>
										Sobre mi
									</button>
								</div>
							</div>
							<div className='md:fixed flex md:right-0 md:flex-col md:mb-0 md:mr-6 mr-0 mb-32 md:gap-y-6 gap-x-6 flex-row z-10'>
								{resolvedTheme != undefined &&
								resolvedTheme === 'dark' ? (
									<>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href='https://github.com/LucianoFedericoC'
											target='_blank'>
											<Image src={gitHub} alt='github' />
										</Link>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}>
											<Image src={gmail} alt='gmail' />
										</Link>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href='https://www.linkedin.com/in/lucianofedericocarducci/'
											target='_blank'>
											<Image src={linkedIn} alt='gmail' />
										</Link>
									</>
								) : resolvedTheme != undefined &&
								  resolvedTheme === 'light' ? (
									<>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href='https://github.com/LucianoFedericoC'
											target='_blank'>
											<Image
												src={gitHubDark}
												alt='github'
											/>
										</Link>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}>
											<Image
												src={gmailDark}
												alt='gmail'
											/>
										</Link>
										<Link
											className='hover:-translate-y-1 hover:scale-110 duration-300 md:sticky'
											href='https://www.linkedin.com/in/lucianofedericocarducci/'
											target='_blank'>
											<Image
												src={linkedInDark}
												alt='gmail'
											/>
										</Link>
									</>
								) : (
									''
								)}
							</div>
						</div>
					</header>
					<div
						className={`opacity-20 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/codiography/image/upload/v1619536430/2-B_kte4f2.png')] bg-fixed h-4 flex items-center justify-center`}
					/>
					<section
						ref={section_1}
						className='dark:bg-portfolio-black bg-portfolio-antiFlashWhite h-screen w-full flex justify-center items-center'>
						<AboutMe />
					</section>
					<div
						className={`opacity-20 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/codiography/image/upload/v1619536430/2-B_kte4f2.png')] bg-fixed h-4 flex items-center justify-center`}
					/>
					<section
						ref={section_2}
						className='dark:bg-portfolio-black bg-portfolio-antiFlashWhite h-screen w-full flex justify-center items-center'>
						<Projects />
					</section>
					{showButton && (
						<div className='fixed right-5 bottom-5 z-30 animate-fade animate-once animate-duration-[300ms] animate-ease-in'>
							<button
								onClick={handleScrollToTop}
								className='sticky rounded-full size-8 md:size-12'>
								<Image src={upArrow} alt='upArrow' />
							</button>
						</div>
					)}
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Home;
