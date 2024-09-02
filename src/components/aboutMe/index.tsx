import LogosSlider from '../slideLogos';
import Image from 'next/image';
import myImage from '../../assets/myImage.jpg';
import { useState, useEffect } from 'react';

const AboutMe = () => {
	const techFront = [
		'HTML5',
		'CSS3',
		'Tailwind',
		'React',
		'Redux',
		'TypeScript',
	];
	const techBack = [
		'Node',
		'Express',
		'PostgreSQL',
		'Sequalize',
		'Javascript',
		'GIT',
	];
	const softSkills = [
		'Proactive',
		'Active listener',
		'Comunicative',
		'Teamwork',
	];
	const aboutMe =
		'¡Hola! Soy Luciano Carducci, desarrollador web frontend/fullstack con una visión creativa para alcanzar experiencias digitales innovadoras. Mi enfoque se centra en fusionar la estética con la funcionalidad, creando sitios web que no solo resulten óptimos sino, que también ofrezcan una experiencia de usuarios singular. Me caracterizo por mi aptitud para trabajar en equipo y colaborar estrechamente con otros diseñadores y desarrolladores para llevar las ideas desde el concepto hasta la realidad digital.';

	const [activeTab, setActiveTab] = useState('');

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (!(e.target instanceof Element) || !e.target.closest('ul')) {
			setActiveTab('');
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			className='p-4 rounded-2xl w-11/12 sm:w-2/4 max-h-3/4 m-auto gap-3 flex flex-col items-center justify-between shadow border border-gray-700'
			style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.2)' }}>
			<header className='flex justify-center w-full gap-3'>
				<div
					className='flex-grow-3 max-w-24 md:max-w-48 min-w-20 shadow p-2 border border-gray-700 rounded-md'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<Image
						src={myImage}
						loading='lazy'
						alt='Mentor profile'
						className='w-full rounded-lg object-cover'
					/>
				</div>
			</header>
			<div className='flex flex-col items-center text-center gap-1 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
				<h2 className='flex items-center text-xl gap-2'>
					Luciano Carducci
				</h2>
				<p>Frontend/Fullstack Developer</p>
			</div>
			<div
				className='shadow p-2 w-full sm:w-auto'
				style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
				<LogosSlider />
			</div>
			<main
				className='w-full border border-gray-700 rounded shadow'
				style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
				<div className='p-4'>
					<ul className='relative flex flex-col justify-start overflow-x-hidden overflow-y-auto md:overflow-hidden max-h-52 md:max-h-full'>
						<li>
							<h1 className='rounded-tl rounded-bl transition-colors duration-300 border-y border-gray-700 rounded p-2'>
								Sobre mi
							</h1>
						</li>
						<li>
							<p className='dark:text-portfolio-antiFlashWhite text-portfolio-black p-2'>
								{aboutMe}
							</p>
						</li>
						<li>
							<h1 className='rounded-tl rounded-bl transition-colors duration-300 border-y border-gray-700 rounded p-2'>
								Skills
							</h1>
						</li>
						<div className='flex flex-col md:flex-row justify-around items-center w-full p-2 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
							<li className='mb-4 sm:mb-0 flex flex-col text-center'>
								{techFront.map((tech, index) => (
									<span key={index}>-{tech}-</span>
								))}
							</li>
							<li className='mb-4 sm:mb-0 flex flex-col text-center'>
								{softSkills.map((tech, index) => (
									<span key={index}>-{tech}-</span>
								))}
							</li>
							<li className='mb-4 sm:mb-0 flex flex-col text-center'>
								{techBack.map((tech, index) => (
									<span key={index}>-{tech}-</span>
								))}
							</li>
						</div>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default AboutMe;
