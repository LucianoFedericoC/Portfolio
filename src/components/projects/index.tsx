import Link from 'next/link';
import Image from 'next/image';
import ebookstore from '../../assets/e-bookstore.png';

const Projects = () => {
	const projects = [
		{
			href: 'https://e-commerce-book-store.vercel.app/',
			imageSrc: ebookstore,
			title: 'E-BookStore',
			description:
				'Un e-commerce de libros realizado con 6 colegas para el proyecto final del curso de programación, con sistema de usuarios, pagos y una llamativa interfaz de usuario.',
		},
		{
			href: '',
			imageSrc: 'IMAGEN',
			title: 'Próximamente...',
			description: '',
		},
		// {
		// 	href: '#',
		// 	imageSrc: 'IMAGEN',
		// 	title: 'Título',
		// 	description: 'Descripción',
		// },
		// {
		// 	href: '#',
		// 	imageSrc: 'IMAGEN',
		// 	title: 'Título',
		// 	description: 'Descripción',
		// },
	];

	return (
		<div className='h-full w-full flex items-center justify-center p-4 overflow-auto'>
			<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 p-4'>
				{projects.map((project, index) => (
					<Link
						key={index}
						href={project.href}
						className='hover:scale-105 transition-all'
						target='_blank'>
						<div
							className='flex flex-col items-center justify-between border border-gray-700 rounded-md p-4 h-full shadow'
							style={{
								boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)',
							}}>
							<h2 className='text-xl font-bold mb-3 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
								{project.title}
							</h2>
							<div className='w-full h-48 bg-gray-700 flex items-center justify-center mb-3 overflow-hidden rounded'>
								{project.imageSrc === 'IMAGEN' ? (
									<span className='text-gray-400'>
										
									</span>
								) : (
									<Image
										src={project.imageSrc}
										alt={`${project.title} project image`}
										className='object-cover w-full h-full'
										layout='responsive'
										width={300}
										height={200}
									/>
								)}
							</div>
							<p className='text-sm text-center dark:text-portfolio-antiFlashWhite text-portfolio-black'>
								{project.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Projects;
