import Link from 'next/link';
import Image from 'next/image';
import ebookstore from '../../assets/e-bookstore.png'

const Projects = () => {
	return (
		<div className='h-[95%] flex justify-center'>
			<div className='lg:w-3/5 md:w-5/6 w-11/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 p-4 md:p-8 overflow-y-auto lg:overflow-hidden'>
				<Link
					href={'https://e-commerce-book-store.vercel.app/'}
					className='hover:scale-105 transition-all'
					target='_blank'>
					<div
						className='flex flex-col items-center justify-center border border-gray-700 rounded-md shadow p-4'
						style={{
							boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)',
						}}>
						<h1 className='text-2xl font-bold mb-4'>E-BookStore</h1>
						<div className='w-full bg-transparent flex items-center justify-center'>
							<Image src={ebookstore} alt='project-image' className='object-cover'/>
						</div>
						<p className='mt-6 text-lg text-center'>Un e-commerce de libros realizado con 6 colegas para el proyecto final del curso de programacion la cual cuenta con sistema de usuarios, pagos y una llamativa interfaz de usuario.</p>
					</div>
				</Link>
				<div
					className='flex flex-col items-center justify-center border border-gray-700 rounded-md shadow p-4'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<h1 className='text-2xl font-bold mb-4'>Título</h1>
					<div className='h-72 w-full bg-transparent flex items-center justify-center'>
						IMAGEN
					</div>
					<p className='mt-6 text-lg text-center'>Descripción</p>
				</div>
				<div
					className='flex flex-col items-center justify-center border border-gray-700 rounded-md shadow p-4'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<h1 className='text-2xl font-bold mb-4'>Título</h1>
					<div className='h-72 w-full bg-transparent flex items-center justify-center'>
						IMAGEN
					</div>
					<p className='mt-6 text-lg text-center'>Descripción</p>
				</div>
				<div
					className='flex flex-col items-center justify-center border border-gray-700 rounded-md shadow p-4'
					style={{ boxShadow: '0 0 10px rgba(300, 300, 300, 0.1)' }}>
					<h1 className='text-2xl font-bold mb-4'>Título</h1>
					<div className='h-72 w-full bg-transparent flex items-center justify-center'>
						IMAGEN
					</div>
					<p className='mt-6 text-lg text-center'>Descripción</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
