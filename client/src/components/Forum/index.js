import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import {useAuth0} from "@auth0/auth0-react";

function Forum() {

    const {user, isAuthenticated, isLoading} = useAuth0();
    const [forumPosts, setForumPosts] = useState([]);
    const [singlePost, setSinglePost] = useState({});
    const [viewSinglePost, setViewSinglePost] = useState(false);
    const [singlePostId, setSinglePostId] = useState("");
    // TODO toggler to update when a new post is submitted so useeffect can rerender

    useEffect(() => {
        getPosts();
    }, [viewSinglePost]);

    const getPosts = () => {
        if (viewSinglePost) {
            API.getPostById(singlePostId).then((res) => {/*TODO take single post from db not forumPosts arr*/});
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
        if(isAuthenticated){
            API.createPost({
                user: user.name,
                title: event.target.children.postTitle.value,
                body: event.target.children.postBody.value,
                replies: [],
                createdAt: Date.now(),
            });
        } else {
            alert("pls authenticate");
        }
    };

    const handleReplySubmit = (event) => {
        event.preventDefault();
        if(isAuthenticated){
            API.createReply(singlePostId, {
                user: user.name,
                body: event.target.children.postBody.value,
                createdAt: Date.now(),
            });
        } else {
            alert("pls authenticate");
        }
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
                                <p>{value.user}: </p>
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
