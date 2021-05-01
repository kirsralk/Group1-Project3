import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function Forum() {
    const [forumPosts, setForumPosts] = useState([]);
    const [singlePost, setSinglePost] = useState({});
    const [viewSinglePost, setViewSinglePost] = useState(false);
    const [singlePostId, setSinglePostId] = useState("");

    useEffect(() => {
        getPosts();
    }, [viewSinglePost]);

    const getPosts = () => {
        if (viewSinglePost) {
            API.getPostById(singlePostId).then((res) => {});
        } else {
            API.getAllPosts().then((res) => {
                setForumPosts(res.data);
            });
        }
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.children.postTitle.value);
        console.log(event.target.children.postBody.value);
        API.createPost({
            user: "TEST USER",
            title: event.target.children.postTitle.value,
            body: event.target.children.postBody.value,
            replies: [],
            createdAt: Date.now(),
        });
    };

    const handleReplySubmit = (event) => {
        event.preventDefault();
        API.createReply(singlePostId, {
            user: "TEST REPLY USER",
            body: event.target.children.postBody.value,
            createdAt: Date.now(),
        });
    };

    const onPostClick = (post) => {
        setViewSinglePost(true);
        setSinglePostId(post._id);
        setSinglePost(post);
    };

    const onCloseButtonClick = (event) => {
        setViewSinglePost(false);
        setSinglePostId("");
    };

    return (
        <>
            {viewSinglePost ? (
                <>
                    <p>
                        {singlePost.title} created by {singlePost.user}
                    </p>
                    {singlePost.replies.map((value, index) => {
                        return (
                            <div key={index}>
                                <p>{value.body}</p>;<hr></hr>
                            </div>
                        );
                    })}
                    <input
                        type="button"
                        value="X"
                        onClick={onCloseButtonClick}
                    ></input>
                    <form
                        action="/action_page.php"
                        onSubmit={handleReplySubmit}
                    >
                        <input
                            type="text"
                            id="postBody"
                            name="postBody"
                            placeholder="Body"
                        ></input>
                        <input type="submit" value="Submit Reply"></input>
                    </form>
                </>
            ) : (
                <>
                    {forumPosts.map((value, index) => {
                        return (
                            <div key={index} onClick={() => onPostClick(value)}>
                                <p id={value._id}>
                                    {value.title} created by {value.user}
                                </p>
                                <p>replies: {value.replies.length}</p>
                                <hr></hr>
                            </div>
                        );
                    })}
                    <form action="/action_page.php" onSubmit={handlePostSubmit}>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            placeholder="Title"
                        ></input>
                        <input
                            type="text"
                            id="postBody"
                            name="postBody"
                            placeholder="Body"
                        ></input>
                        <input type="submit" value="Submit Post"></input>
                    </form>
                </>
            )}
        </>
    );
}

export default Forum;
