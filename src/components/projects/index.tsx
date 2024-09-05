import Link from 'next/link';
import Image from 'next/image';
import ebookstore from '../../assets/e-bookstore.png';

const Projects = () => {
	return (
		<div className='h-screen flex justify-center'>
			<div className='lg:w-3/5 md:w-3/4 w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:p-8 overflow-auto'>
				{[
					{
						href: 'https://e-commerce-book-store.vercel.app/',
						imageSrc: ebookstore,
						title: 'E-BookStore',
						description:
							'Un e-commerce de libros realizado con 6 colegas para el proyecto final del curso de programación, con sistema de usuarios, pagos y una llamativa interfaz de usuario.',
					},
					{
						href: '#',
						imageSrc: 'IMAGEN',
						title: 'Título',
						description: 'Descripción',
					},
					{
						href: '#',
						imageSrc: 'IMAGEN',
						title: 'Título',
						description: 'Descripción',
					},
					{
						href: '#',
						imageSrc: 'IMAGEN',
						title: 'Título',
						description: 'Descripción',
					},
				].map((project, index) => (
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
							<h1 className='text-2xl font-bold dark:text-portfolio-antiFlashWhite text-portfolio-black'>
								{project.title}
							</h1>
							<div className='w-full bg-transparent flex items-center justify-center'>
								{project.imageSrc === 'IMAGEN' ? (
									<div className='w-full h-40 bg-gray-300 flex items-center justify-center'>
										<span className='text-gray-500'>
											{project.imageSrc}
										</span>
									</div>
								) : (
									<Image
										src={project.imageSrc}
										alt='project-image'
										className='object-cover w-full h-46'
									/>
								)}
							</div>
							<p className='text-lg text-center dark:text-portfolio-antiFlashWhite text-portfolio-black'>
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
