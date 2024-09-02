import { useState, useEffect } from 'react';
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
	const [buttonLoad, setButtonLoad] = useState({error: false, confirm: false, load: false})


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
		setButtonLoad({...buttonLoad, load: true});
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
				formData
			);
			setButtonLoad({...buttonLoad, load: false});
			setButtonLoad({...buttonLoad, confirm: true});
			delay(()=>{setButtonLoad({...buttonLoad, confirm: false})}, 2000)
			setFormData({ name: '', email: '', message: '', subject: '' });
		} catch (error) {
			setButtonLoad({...buttonLoad, error: true});
			console.error('Error al enviar el correo electrónico:', error);
			alert('Error al enviar el correo electrónico');
		}
	};

	return (
		<>
			{!isLoading ? (
				<div className='dark:bg-portfolio-black bg-portfolio-antiFlashWhite'>
					<div className='border-x border-[#16262d] p-4 w-full max-w-7xl max-h-screen mx-auto rounded-lg overflow-hidden'>
						{resolvedTheme === 'dark' ? (
							<Link href='/' className='flex w-12'>
								<Image src={backButton} alt='backButton' />
							</Link>
						) : (
							<Link href='/' className='flex w-12'>
								<Image src={backButtonDark} alt='backButton' />
							</Link>
						)}
						<form
							onSubmit={handleSubmit}
							className='flex flex-col w-full h-screen justify-center items-center'>
							<div className='opacity-30'>
								<Image
									className='absolute lg:top-[25%] lg:left-[25%] md:top-[40%] md:left-[40%] left-[15%] top-[15%] lg:size-2/4 md:size-1/4 size-3/4 animate-fade animate-once animate-duration-[3000ms] animate-delay-[2000ms] animate-ease-in'
									src={logo}
									alt='logo'
								/>
							</div>
							<div className='relative md:w-2/4 w-full z-20'>
								<div className='mb-12 animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-in-out'>
									<input
										className='peer p-4 block w-full dark:bg-portfolio-antiFlashWhite bg-gray-300 font-semibold text-portfolio-black border-gray-200 rounded-md text-md placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
								focus:pt-6
								focus:pb-2
								[&:not(:placeholder-shown)]:pt-6
								[&:not(:placeholder-shown)]:pb-2
								autofill:pt-6
								autofill:pb-2'
										placeholder='.....'
										id='name'
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
									/>
									<label
										className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none
								peer-focus:text-xs
								peer-focus:-translate-y-2.5
								peer-focus:text-gray-500
								peer-[:not(:placeholder-shown)]:text-xs
								peer-[:not(:placeholder-shown)]:-translate-y-2.5
								peer-[:not(:placeholder-shown)]:text-gray-500'
										htmlFor='name'>
										Nombre
									</label>
								</div>
								<div className='mb-12 animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out'>
									<input
										className='peer p-4 block w-full dark:bg-portfolio-antiFlashWhite bg-gray-300 font-semibold text-portfolio-black border-gray-200 rounded-md text-md placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
								focus:pt-6
								focus:pb-2
								[&:not(:placeholder-shown)]:pt-6
								[&:not(:placeholder-shown)]:pb-2
								autofill:pt-6
								autofill:pb-2'
										id='email'
										type='email'
										placeholder='Correo Electrónico'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<label
										className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none
								peer-focus:text-xs
								peer-focus:-translate-y-2.5
								peer-focus:text-gray-500
								peer-[:not(:placeholder-shown)]:text-xs
								peer-[:not(:placeholder-shown)]:-translate-y-2.5
								peer-[:not(:placeholder-shown)]:text-gray-500'
										htmlFor='email'>
										Correo Electrónico
									</label>
								</div>
								<div className='mb-12 animate-fade-right animate-once animate-duration-1000 animate-delay-[600ms] animate-ease-in-out'>
									<input
										className='peer p-4 block w-full dark:bg-portfolio-antiFlashWhite bg-gray-300 text-portfolio-black border-gray-200 rounded-md text-md placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
								focus:pt-6
								focus:pb-2
								[&:not(:placeholder-shown)]:pt-6
								[&:not(:placeholder-shown)]:pb-2
								autofill:pt-6
								autofill:pb-2'
										id='subject'
										type='text'
										placeholder='Asunto'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
									/>
									<label
										className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none
								peer-focus:text-xs
								peer-focus:-translate-y-2.5
								peer-focus:text-gray-500
								peer-[:not(:placeholder-shown)]:text-xs
								peer-[:not(:placeholder-shown)]:-translate-y-2.5
								peer-[:not(:placeholder-shown)]:text-gray-500'
										htmlFor='message'>
										Asunto
									</label>
								</div>
								<div className='mb-4 animate-fade-right animate-once animate-duration-1000 animate-delay-[900ms] animate-ease-in-out'>
									<textarea
										className='shadow appearance-none border dark:bg-portfolio-antiFlashWhite bg-gray-300 rounded-md w-full text-md pt-2 pb-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none placeholder-gray-500'
										id='message'
										placeholder='Mensaje'
										name='message'
										value={formData.message}
										onChange={handleChange}
										required></textarea>
								</div>
								<div className='flex items-center justify-end animate-fade-right animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-in-out'>
									<ButtonLoader
										buttonLoad={buttonLoad}
										loadStr={'Enviando...'}
										loadEndStr={'Envíado'}
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
