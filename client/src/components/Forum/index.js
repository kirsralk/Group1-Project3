import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function Forum() {
    const [forumPosts, setForumPosts] = useState([]);
    const [singlePost, setSinglePost] = useState({});
    const [viewSinglePost, setViewSinglePost] = useState(false);
    const [singlePostid, setSinglePostid] = useState("");

    useEffect(() => {
        getPosts();
    }, [viewSinglePost]);

    const handlePostSubmit = (event) => {
        event.preventDefault();
        API.createPost({
            user: "TEST USER",
            title: "TEST TITLE",
            body: "TEST BODY",
            replies: [],
            createdAt: Date.now(),
        });
    };

    const getPosts = () => {
        if (viewSinglePost) {
            API.getPostById(singlePostid).then((res) => {});
        } else {
            API.getAllPosts().then((res) => {
                setForumPosts(res.data);
            });
        }
    };

    const handleReplySubmit = (event) => {
        event.preventDefault();
        API.createReply("6088388bf3aa4c3ae0e5eea9", {
            user: "TEST REPLY USER",
            title: "TEST REPLY TITLE",
            body: "TEST REPLY BODY",
            createdAt: Date.now(),
        });
    };

    const onPostClick = (post) => {
        setViewSinglePost(true);
        //setSinglePostid(event.target.id);
        setSinglePost(post);
    };

    const onCloseButtonClick = (event) => {
        setViewSinglePost(false);
        setSinglePostid("");
    };

    return (
        <>
            {viewSinglePost ? (
                <>
                    <p>{singlePost.title} created by {singlePost.user}</p>
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
                </>
            )}

            <form action="/action_page.php" onSubmit={handlePostSubmit}>
                <input type="text" id="post" name="post"></input>
                <input type="submit" value="Submit Post"></input>
            </form>
            <form action="/action_page.php" onSubmit={handleReplySubmit}>
                <input type="text" id="Reply" name="Reply"></input>
                <input type="submit" value="Submit Reply"></input>
            </form>
        </>
    );
}

export default Forum;
