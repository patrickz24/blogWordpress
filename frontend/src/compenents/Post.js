import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Post() {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `/wp-json/wp/V2/posts/${id}`,
            );
            console.log("je suis le result", result.data)
            setPosts(result.data);
            setTitle(result.data.title.rendered);
            setContent(result.data.content.rendered);

        };

        fetchData();
    }, []);

    console.log("Je suis le post", posts)

    return (
        <div>
            <Fragment>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </Fragment>
        </div>
    )
}