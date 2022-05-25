import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='container mx-auto h-20 flex justify-between items-center relative'>
			<Link href='/'>
				<h1 className='text-4xl text-primary-color font-base cursor-pointer ml-5 sm:ml-0'>
					AlphaCode.
				</h1>
			</Link>
			<div className='space-x-10 hidden md:flex items-center'>
				<Link href='/mentorship'>
					<a className='text-head-color text-lg hover:text-primary-color'>
						Mentorship
					</a>
				</Link>
				<Link href='/contact'>
					<a className='border-solid border-2 border-[#7510F7] rounded-3xl px-5 py-2 text-primary-color text-lg hover:bg-primary-color hover:text-[#fff] ease-in duration-300'>
						Say Hello
					</a>
				</Link>
			</div>

			<div onClick={handleNav} className='block md:hidden'>
				{!nav ? (
					<AiOutlineMenu
						size={35}
						className='text-primary-color mr-5'
					/>
				) : (
					<AiOutlineClose
						size={35}
						className='text-primary-color mr-5 sm:mr-0'
					/>
				)}
			</div>

			{nav && (
				<div className='absolute top-20 left-0 right-0 flex flex-col items-center justify-start bg-white h-60 '>
					<Link href='/mentorship'>
						<a className='text-head-color text-lg hover:text-primary-color mb-5 mt-5'>
							Mentorship
						</a>
					</Link>
					<Link href='/contact'>
						<a className='border-solid border-2 border-[#7510F7] rounded-3xl px-5 py-2 text-primary-color text-lg hover:bg-primary-color hover:text-[#fff] ease-in duration-300'>
							Say Hello
						</a>
					</Link>
				</div>
			)}

			{/* <ul
				className={
					nav
						? 'fixed inset-x-0 top-20 w-[100%] h-80  bg-white ease-in-out duration-500'
						: 'ease-in-out duration-500 fixed -top-[100%]'
				}>
				<div className=' flex w-full h-full flex-col items-center p-5'>
					<Link href='/mentorship'>
						<a className='text-head-color text-lg hover:text-primary-color mb-5'>
							Mentorship
						</a>
					</Link>
					<Link href='/contact'>
						<a className='border-solid border-2 border-[#7510F7] rounded-3xl px-5 py-2 text-primary-color text-lg hover:bg-primary-color hover:text-[#fff] ease-in duration-300  '>
							Say Hello
						</a>
					</Link>
				</div>
			</ul> */}
		</div>
	);
};

export default Navbar;
