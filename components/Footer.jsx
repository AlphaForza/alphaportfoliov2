import Link from 'next/link';
import {
	AiOutlineTwitter,
	AiOutlineDribbble,
	AiOutlineMail,
} from 'react-icons/ai';
import {
	FaLinkedinIn,
	FaAngellist,
	FaPinterest,
} from 'react-icons/fa';
import TextFooter from './TextFooter';
const Footer = () => {
	return (
		<div className='bg-primary-color h-[100%]'>
			<TextFooter />
			<div className='container mx-auto flex flex-col items-center'>
				<h1 className='pt-20 text-white text-4xl text-center'>
					AlphaCode.
				</h1>
				<p className='text-2xl text-gray-300 my-7 text-center mx-5 md:mx-0'>
					Living, learning, & leveling up one day at a time.
				</p>
				<div className='flex mb-20'>
					{[
						<AiOutlineTwitter />,
						<AiOutlineDribbble />,
						<FaLinkedinIn />,
						<FaAngellist />,
						<FaPinterest />,
						<AiOutlineMail />,
					].map((icon, index) => (
						<Link href='/' className='' key={index}>
							<span className='w-[40px] h-[40px] border-2 border-gray-400 hover:border-white hover:bg-white rounded-full flex items-center justify-center mx-3 text-white text-lg sm:text-2xl cursor-pointer hover:text-primary-color ease-in-out duration-300'>
								{icon}
							</span>
						</Link>
					))}
				</div>
				<p className='text-lg md:text-2xl text-gray-300 my-7 text-center mx-5 md:mx-0'>
					Handcrafted by &copy; metwentytwenty
				</p>
			</div>
		</div>
	);
};

export default Footer;
