import { useEffect, useState } from 'react';
//import { useParams, Link } from 'react-router-dom';
import Card from '../components/card';
import './../styles/post.css';


const Posts = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((result) => {
				setPosts(result);
			});
	}, []);

  return (

    <div className="App">
      {posts.map(({ id, title, body, userId }) => (
        <Card key={id} title={title} body={body} userId={userId} id={id} />
      ))}
    </div>
  );
};

export default Posts;