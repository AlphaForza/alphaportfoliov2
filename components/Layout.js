import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-base'>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
