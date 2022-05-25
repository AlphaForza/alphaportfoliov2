import Link from 'next/link';

const Investing = (props) => {
	const { tint, onTap } = props;
	return (
		<div className='container mx-auto flex flex-col items-center py-20 text-center'>
			<h2 className='text-2xl text-primary-color mb-2'>
				Interested in collaboratiing or ivnesting?
			</h2>
			<p className='text-lg font-light mb-5 px-5'>
				I’m always open to discussing product design work or
				partnership opportunities.
			</p>
			<Link href='/contact'>
				<p className='border-2 border-primary-color px-6 py-2 rounded-full text-lg text-primary-color hover:text-white hover:bg-primary-color ease-in-out duration-500 cursor-pointer '>
					Start a convesation
				</p>
			</Link>
		</div>
	);
};

export default Investing;
