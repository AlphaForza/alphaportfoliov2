import TextHolder from './TextHolder';
import data from '../constants/data';
import Image from 'next/image';

const AboutMe = () => {
	const works = data.work;

	return (
		<div className=''>
			<TextHolder
				title="Hi, I'm AlphaCode. Nice to meet you"
				desc="Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.v"
			/>
			<div className='container mx-auto h-[100%] w-[100vw] px-5 mb-10'>
				<div className='flex justify-between flex-wrap -mt-10 md:-mt-20 bg-white  rounded-2xl p-10 shadow-md shadow-black-500/50 divide-y md:divide-y-0  md:divide-x  divide-slate-300'>
					{works.map((work) => (
						<div
							key={work.title}
							className='w-[100%] md:w-[33%] md:h-[80vh] p-10 text-center flex flex-col items-center justify-start bg-white '>
							<Image
								src={work.img}
								width={50}
								height={50}
								alt='workImg'
							/>
							<p className='text-2xl font-bold my-5'>{work.title}</p>
							<p className='text-lg font-light'>{work.desc}</p>
							<p className='mt-10 text-primary-color text-lg'>
								{work.secTitle}
							</p>
							<span className='text-2xl font-light'>{work.tags}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
