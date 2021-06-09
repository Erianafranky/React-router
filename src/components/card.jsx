import { Link } from 'react-router-dom';
import './../styles/card.css';

const Card = ({ userId, title, body, id }) => {
	return (
		<div className='card'>
			<h2 className='title'>{title}</h2>
			<p>{body}</p>
			<Link to={`/userposts/${userId}`}>post by: user {userId}</Link>
			<Link to={`/post/${id}`} className="card-link">Read More</Link>
		</div>
	);
};

export default Card;
