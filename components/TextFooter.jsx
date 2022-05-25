import Link from 'next/link';

const TextFooter = () => {
	return (
		<div className='container mx-auto w-[100vw] h-[300px] lg:h-[150px] '>
			<div className='relative w-[100%] h-[100%] '>
				<div className=' bg-[#141c3a] text-white flex flex-col lg:flex-row w-[100%] h-[100%] absolute -top-20 rounded-2xl p-10 items-center justify-between'>
					<h2 className='text-4xl font-bold my-5 lg:ml-10 '>
						Start a project
					</h2>
					<p className='text-lg text-gray-300 lg:w-[40%] text-center'>
						Interested in working together? We should queue up a chat.
						I’ll buy the coffee.
					</p>

					<Link href='/'>
						<span className='cursor-pointer text-lg xlg:text-2xl mt-8 lg:mt-0 px-7 py-2 border-2 border-primary-color rounded-full'>
							{' '}
							Lets do this
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TextFooter;
