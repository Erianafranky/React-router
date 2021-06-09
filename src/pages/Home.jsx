import {Link} from 'react-router-dom';
import './../styles/home.css';

const Home = () => {

	return (
		<div className='mainbox'>
			<h1>Welcome to our Blog</h1>
			<p>View our posts here <Link to='/post'>User Posts</Link>
			</p>
			
		</div>
	);
};

export default Home;
