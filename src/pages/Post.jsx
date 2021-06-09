import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import './../styles/post.css';


const Post = () => {
	const [post, setPost] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?id=${params.id}`)
			.then((res) => res.json())
			.then((result) => {
				setPost(result[0]);
			});
	}, [params]);

	return (
		<div className='mainbox'>
			<h1 className="title">{post.title}</h1>
			<div className='message'>
				<p>{post.body}</p>
                
                <p className="post-link">
                <Link to='/home' className="link">Home</Link> <Link to='/post' className="link">Post</Link>
                </p>
				  
			</div>
		</div>
	);
};

export default Post;
