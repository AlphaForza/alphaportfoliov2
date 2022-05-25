import Image from 'next/image';
import personOne from '../public/personOne.png';
import personTwo from '../public/personTwo.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='container mx-auto py-20'>
			<h3 className='text-center text-3xl font-semibold'>
				Testimonials
			</h3>
			<p className='text-center mx-5 md:mx-0 my-2 text-2xl text-gray-500 font-light'>
				People I&apos;ve worked with have said some nice things..
			</p>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={6100}
				className=' w-[100%]  h-[500px] md:h-[400px] flex py-10'>
				<div className='flex flex-col items-center'>
					<Image
						src={personOne}
						width={100}
						height={100}
						className='rounded-full'
						alt='personImg'
					/>
					<p className='w-[50%] text-black font-base text-md md:text-lg my-5'>
						&lsquo;Matt was a real pleasure to work with and we look
						forward to working with him again. Hes definitely the kind
						of designer you can trust with a project from start to
						finish.&lsquo;
					</p>
					<span className='text-black font-bold text-lg font-base'>
						Tihomir Milenkovic
					</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={personTwo}
						width={100}
						height={100}
						className='rounded-full'
						alt='personImg'
					/>
					<p className='w-[50%] text-black font-base text-md md:text-lg my-5'>
						&lsquo;Matt was a real pleasure to work with and we look
						forward to working with him again. Hes definitely the kind
						of designer you can trust with a project from start to
						finish.&lsquo;
					</p>
					<span className='text-black font-bold text-lg font-base'>
						Tijana Milenkovic
					</span>
				</div>
			</Carousel>
		</div>
	);
};

export default Testimonials;
