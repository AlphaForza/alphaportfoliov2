import Image from 'next/image';
import Link from 'next/link';

import data from '../constants/data';
const Work = () => {
	const cards = data.cards;

	return (
		<div className='container mx-auto flex flex-col w-[100vw]'>
			<div className='flex flex-col items-center'>
				<h3 className='text-3xl font-semibold font-main'>
					My Recent Work
				</h3>
				<p className='text-lg text-center px-5'>
					Here are a few design projects I&apos;ve worked on recently.
					Want to see more
					<span className='text-primary-color font-medium'>
						Email me.
					</span>
				</p>
			</div>
			<div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 my-10 w-[100%]'>
				{cards.map((card, index) => (
					<div
						className='px-5 sm:px-0 mx-10 sm:mx-0 relative w-[100vw] sm:w-[100%] h-full'
						key={index}>
						<Image
							src={card.img}
							className='rounded-2xl'
							width='380'
							height='250'
							layout='responsive'
							objectFit='contain'
							alt='cardImg'
						/>
						<div className='absolute top-0 bottom-0 right-5 left-5 sm:right-1 sm:left-1 z-10 flex flex-col  justify-center items-center opacity-0 hover:opacity-100 bg-[#141c3a] rounded-lg ease-in-out duration-500 '>
							<p className='text-white text-lg text-center px-5 my-5'>
								{card.text}
							</p>
							<Link href='/websiteExample'>
								<p className='px-5 py-2 border-2 border-purple-500 text-center text-white rounded-lg cursor-pointer scale-100 hover:scale-125 hover:bg-white hover:text-primary-color hover:border-transparent ease-in-out duration-500  '>
									{card.btn}
								</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
