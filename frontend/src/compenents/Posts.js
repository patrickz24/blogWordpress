import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "/wp-json/wp/V2/posts",
            );
            setPosts(result.data);
        };

        fetchData();
    }, []);

    console.log("je suis les POSTS!!!!!", posts)
    return (

        < div >
            {posts.map(post => (
                <Fragment>
                    <h1 key={post.id}>{post.title.rendered}</h1>
                    <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    <a href={`/posts/${post.id}`}>View Book </a>
                </Fragment>
            ))
            }
        </div >
    );
}
