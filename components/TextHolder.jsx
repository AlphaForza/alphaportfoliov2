const TextHolder = ({ title, desc }) => {
	return (
		<div className='w-[100%] h-[500px] -mt-7 flex flex-col items-center justify-center bg-primary-color text-white'>
			<h3 className='w-[70%] text-center mb-5 mt-5 text-3xl md:text-4xl font-main'>
				{title}
			</h3>
			<p className='w-[70%] md:w-[50%] text-lg md:text-1xl font-light text-center mb-5'>
				{desc}
			</p>
		</div>
	);
};

export default TextHolder;
