import React, { useRef } from 'react';
import useInView from '@/hooks/useInView';

const LogosSlider: React.FC = () => {
	const containerRef = useRef(null);
	const isIntersecting = useInView(containerRef, {
		threshold: 0,
	});

	const logos = [
		'js',
		'html',
		'css',
		'express',
		'git',
		'jquery',
		'materialui',
		'mongodb',
		'mysql',
		'nodejs',
		'postgres',
		'postman',
		'react',
		'redux',
		'sequelize',
		'vscode',
		'vite',
		'bootstrap',
		'bash',
		'tailwind',
	];
	const carouselBlogs = [...logos];

	return (
		<div ref={containerRef}>
			<div className='flex justify-center items-center'>
				<div className='overflow-hidden'>
					<div
						className={`flex whitespace-nowrap ${
							isIntersecting ? 'animate-scroll' : ''
						} gap-x-2`}>
						{carouselBlogs.map((index) => (
							<img
								src={`https://skillicons.dev/icons?i=${carouselBlogs}&perline=10`}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogosSlider;
