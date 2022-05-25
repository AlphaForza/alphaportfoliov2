import Head from 'next/head';
import Image from 'next/image';
import heroAvatar from '../public/heroAvatar.svg';
import heroImage from '../public/heroImage.svg';

// Import Pages inside home
import {
	AboutMe,
	Work,
	Investing,
	Testimonials,
} from '../components/index';

export default function Home() {
	return (
		<>
			<Head>
				<title>AlphaCode Portfolio</title>
				{/* <link rel='shortcut icon' href='../public/static/logo.png' /> // MORAM OVDE DA DODAM ICON/IMG ZA TAB */}
				{/* <link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='public/favicon-32x32.png'
				/> */}
			</Head>

			<div className='container mx-auto flex flex-col w-full h-[90vh] justify-between '>
				<h2 className=' text-3xl mx-3 md:text-6xl font-main text-center mt-10 md:mt-5 md:mb-10'>
					Designer, Front-end Developer & Mentor
				</h2>
				<p className=' text-3 mx-5 mb-20 sm:mb-0 md:text-2xl md:-mt-10 text-center font-light text-[#525252]'>
					I design and code beautifully simple things, and I love what
					I do.
				</p>
				<div className='flex flex-col items-center px-2'>
					<Image
						src={heroAvatar}
						width={250}
						height={250}
						alt='heroProfilImage'
					/>
					<Image
						src={heroImage}
						width={600}
						height={300}
						alt='heroImage'
					/>
				</div>
			</div>
			<AboutMe />
			<Work />
			<Investing />
			<Testimonials />
		</>
	);
}
