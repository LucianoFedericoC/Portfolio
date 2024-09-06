import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/SVG/logo.svg';
import backButton from '../../assets/SVG/iconsLight/backButton.svg';
import backButtonDark from '../../assets/SVG/iconsDark/backButtonDark.svg';
import Loader from '../loader/pageLoader';
import ButtonLoader from '../loader/buttonLoader';
import { useTheme } from 'next-themes';
import { delay } from '@/utils/delay';

const ContactPage: React.FC = () => {
	const { resolvedTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(false);
	const [buttonLoad, setButtonLoad] = useState({
		error: false,
		confirm: false,
		load: false,
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		subject: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setButtonLoad({ ...buttonLoad, load: true });
		try {
			await axios.post(
				'/api/contact',
				formData
			);
			setButtonLoad({ ...buttonLoad, load: false });
			setButtonLoad({ ...buttonLoad, confirm: true });
			delay(() => {
				setButtonLoad({ ...buttonLoad, confirm: false });
			}, 2000);
			setFormData({ name: '', email: '', message: '', subject: '' });
		} catch (error) {
			setButtonLoad({ ...buttonLoad, error: true });
			console.error('Error al enviar el correo electrónico:', error);
			delay(() => {
				setButtonLoad({ ...buttonLoad, confirm: false });
				setButtonLoad({ ...buttonLoad, load: false });
				setButtonLoad({ ...buttonLoad, error: false });
				setFormData({ name: '', email: '', message: '', subject: '' });
			}, 2000);
		}
	};

	return (
		<>
			{!isLoading ? (
				<div className='dark:bg-portfolio-black bg-portfolio-antiFlashWhite min-h-screen flex flex-col justify-center items-center p-4'>
					<div className='w-full max-w-3xl relative border-x-2 border-gray-700 border-opacity-30'>
						<form
							onSubmit={handleSubmit}
							className='relative z-10 p-8'>
							<Image
								className='absolute opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-contain'
								src={logo}
								alt='logo'
							/>
							<div className='flex flex-row'>
								<Link
									href='/'
									className=''>
									<Image
										src={
											resolvedTheme === 'dark'
												? backButton
												: backButtonDark
										}
										alt='backButton'
										width={36}
										height={36}
									/>
								</Link>
								<h1 className='text-3xl font-bold mb-6 dark:text-portfolio-antiFlashWhite text-portfolio-black'>
									Contacto
								</h1>
							</div>
							<div className='space-y-4 md:space-y-10 lg:space-y-12'>
								<div className='relative'>
									<input
										className='peer w-full p-4 border rounded-md bg-portfolio-antiFlashWhite text-portfolio-black placeholder-transparent focus:outline-none focus:ring-2'
										id='name'
										type='text'
										name='name'
										placeholder='Nombre'
										value={formData.name}
										onChange={handleChange}
										required
									/>
									<label
										className='z-50 absolute left-4 -top-3 text-sm text-gray-600 dark:text-gray-400 transition-all peer-[:not(:placeholder-shown)]:bg-portfolio-antiFlashWhite peer-[:not(:placeholder-shown)]:rounded-md peer-[:not(:placeholder-shown)]:px-2 peer-placeholder-shown:rounded-md peer-placeholder-shown:px-2 peer-placeholder-shown:bg-portfolio-antiFlashWhite  peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm'
										htmlFor='name'>
										Nombre
									</label>
								</div>
								<div className='relative'>
									<input
										className='peer w-full p-4 border rounded-md bg-portfolio-antiFlashWhite text-portfolio-black placeholder-transparent focus:outline-none focus:ring-2'
										id='email'
										type='email'
										name='email'
										placeholder='Correo Electrónico'
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<label
										className='absolute left-4 -top-3 text-sm text-gray-600 dark:text-gray-400 transition-all peer-[:not(:placeholder-shown)]:bg-portfolio-antiFlashWhite peer-[:not(:placeholder-shown)]:rounded-md peer-[:not(:placeholder-shown)]:px-2 peer-placeholder-shown:rounded-md peer-placeholder-shown:px-2 peer-placeholder-shown:bg-portfolio-antiFlashWhite peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm'
										htmlFor='email'>
										Correo Electrónico
									</label>
								</div>
								<div className='relative'>
									<input
										className='peer w-full p-4 border rounded-md bg-portfolio-antiFlashWhite text-portfolio-black placeholder-transparent focus:outline-none focus:ring-2'
										id='subject'
										type='text'
										name='subject'
										placeholder='Asunto'
										value={formData.subject}
										onChange={handleChange}
									/>
									<label
										className='absolute left-4 -top-3 text-sm text-gray-600 dark:text-gray-400 transition-all peer-[:not(:placeholder-shown)]:bg-portfolio-antiFlashWhite peer-[:not(:placeholder-shown)]:rounded-md peer-[:not(:placeholder-shown)]:px-2 peer-placeholder-shown:rounded-md peer-placeholder-shown:px-2 peer-placeholder-shown:bg-portfolio-antiFlashWhite peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm'
										htmlFor='subject'>
										Asunto
									</label>
								</div>
								<div className='relative'>
									<textarea
										className='w-full p-4 border rounded-md bg-portfolio-antiFlashWhite text-portfolio-black placeholder-gray-500 focus:outline-none focus:ring-2 resize-none h-32'
										id='message'
										name='message'
										placeholder='Mensaje'
										value={formData.message}
										onChange={handleChange}
										required></textarea>
								</div>
								<div className='flex justify-end'>
									<ButtonLoader
										buttonLoad={buttonLoad}
										loadStr={'Enviando...'}
										loadEndStr={'Enviado'}
										loadErrorStr={'Error'}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default ContactPage;
