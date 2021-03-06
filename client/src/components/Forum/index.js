import React, { useEffect, useState } from "react";
import "./style.css";
import SingleForumPost from "../SingleForumPost";
import AllForumPosts from "../AllForumPosts";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import ls from "local-storage";

function Forum() {
    //get our user and whether theyre cool or not
    const { user, isAuthenticated } = useAuth0();

    //boolean to determine if resources are required to render
    const [isLoading, setIsLoading] = useState(false);
    //all forum posts retireved from db
    const [forumPosts, setForumPosts] = useState([]);
    //single forum post from db
    const [singlePost, setSinglePost] = useState({});
    //replies to the single post from db
    const [singlePostReplies, setSinglePostReplies] = useState([]);
    //bollean to determine if the single post should displayed or if all posts should be
    const [viewSinglePost, setViewSinglePost] = useState(false);
    //id of single post to retireve from db
    const [singlePostId, setSinglePostId] = useState("");
    //toggler to re render page when we want
    const [renderPage, makePageReRender] = useState(true);
    const [count, setCount] = useState(0);

    //call useeffect when we want to switch to and from viewing a single post or
    //when renderPage is toggled
    useEffect(() => {
        getPosts();
        //console.log(count);
        //window.scrollTo(0, 700);
    }, [count, renderPage, viewSinglePost]);

    const getPosts = () => {
        //wait for db results before rendering page
        setIsLoading(true);
        if (viewSinglePost) {
            //get single post based on id
            API.getPostById(singlePostId).then((res) => {
                setSinglePostReplies(res.data.replies);
                setSinglePost(res.data);
                setIsLoading(false);
            });
        } else {
            //be greedy get all the posts
            API.getAllPosts().then((res) => {
                setForumPosts(res.data);
                setIsLoading(false);
            });
        }
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        //if user is authenticated create a post
        if (isAuthenticated) {
            API.createPost({
                user: user.name,
                title: event.target.children.form.children.postTitle.value,
                body: event.target.children.form.children.postBody.value,
                replies: [],
                createdAt: Date.now(),
            });
        } else {
            //otherwise tell them they cant
            alert("pls authenticate");
        }
        //rerender page
        makePageReRender(!renderPage);
    };

    const handleReplySubmit = (event) => {
        event.preventDefault();
        //if user is authenticated create a reply
        if (isAuthenticated) {
            API.createReply(singlePostId, {
                user: user.name,
                body: event.target.children.form.children.postBody.value,
                createdAt: Date.now(),
            });
        } else {
            //otherwise tell them they cant
            alert("pls authenticate");
        }
        //rerender page
        makePageReRender(!renderPage);
    };

    const onPostClick = (post) => {
        //window.scrollTo(0, 700);
        // var elmnt = document.getElementById("scrollHere");
        // elmnt.scrollIntoView();
        
        //set id to search db for
        setSinglePostId(post._id);
        //view a single post hopefully the one clicked
        setViewSinglePost(true);
    };

    const onCloseButtonClick = () => {
        //setCount(count + 1);

        //see all posts
        setViewSinglePost(false);
        //clear single post id
        setSinglePostId("");
    };

    //display loading thing to let users know that were working on it
    if (isLoading) {
        return <p>Loading...</p>;
    }
    ///727
    ///727
    ///727
    ///727
    ///727
    ///727
    return (
        <>
            {viewSinglePost ? (
                <>
                    <SingleForumPost
                        post={singlePost}
                        date={singlePost.createdAt}
                        replies={singlePostReplies}
                        closePost={onCloseButtonClick}
                        submitReply={handleReplySubmit}
                        id="scrollHere"
                    />
                </>
            ) : (
                <>
                    <AllForumPosts
                        posts={forumPosts}
                        submitPost={handlePostSubmit}
                        clickPost={onPostClick}
                        id="scrollHere"
                    />
                </>
            )}
        </>
    );
}

export default Forum;
