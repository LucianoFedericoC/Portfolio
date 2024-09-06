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
		'Proactivo',
		'Escucha activa',
		'Comunicativo',
		'Trabajo en equipo',
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
		<div className='flex justify-center items-center min-h-screen p-4'>
			<div
				className='p-4 rounded-2xl w-full max-w-5xl gap-6 flex flex-col items-center justify-between shadow border border-gray-700'
				style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.2)' }}>
				<header className='flex justify-center w-full gap-3'>
					<div
						className='flex-shrink-0 w-24 md:w-36 shadow p-2 border border-gray-700 rounded-md'
						style={{
							boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)',
						}}>
						<Image
							src={myImage}
							width={200}
							height={200}
							alt='Mentor profile'
							className='w-full h-full object-cover rounded-lg'
							priority
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
					className='shadow p-2 w-full'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<LogosSlider />
				</div>
				<main
					className='w-full border border-gray-700 rounded shadow'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<div className='p-4'>
						<ul className='flex flex-col justify-start overflow-y-auto max-h-96'>
							<li>
								<h1 className='rounded-tl rounded-bl transition-colors duration-300 border-y border-gray-700 rounded p-2 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
									Sobre mi
								</h1>
							</li>
							<li>
								<p className='dark:text-portfolio-antiFlashWhite text-portfolio-black p-2'>
									{aboutMe}
								</p>
							</li>
							<li>
								<h1 className='rounded-tl rounded-bl transition-colors duration-300 border-y border-gray-700 rounded p-2 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
									Skills
								</h1>
							</li>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-2 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
								<div className='flex flex-col items-center text-center'>
									<h3 className='font-bold mb-2'>Frontend</h3>
									{techFront.map((tech, index) => (
										<span key={index}>-{tech}-</span>
									))}
								</div>
								<div className='flex flex-col items-center text-center'>
									<h3 className='font-bold mb-2'>
										Soft Skills
									</h3>
									{softSkills.map((skill, index) => (
										<span key={index}>-{skill}-</span>
									))}
								</div>
								<div className='flex flex-col items-center text-center'>
									<h3 className='font-bold mb-2'>Backend</h3>
									{techBack.map((tech, index) => (
										<span key={index}>-{tech}-</span>
									))}
								</div>
							</div>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
};

export default AboutMe;
