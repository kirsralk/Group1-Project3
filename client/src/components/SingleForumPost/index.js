import React from "react";
import "./style.css";

function SingleForumPost(props) {


    return (
        <>
            <p>
                {props.post.title} created by {props.post.user}
            </p>
            {props.replies.map((value, index) => {
                return (
                    <div key={index}>
                        <p>{value.user}: </p>
                        <p>{value.body}</p>;<hr></hr>
                    </div>
                );
            })}
            <input type="button" value="X" onClick={props.closePost}></input>
            <form action="/action_page.php" onSubmit={props.submitReply}>
                <input
                    type="text"
                    id="postBody"
                    name="postBody"
                    placeholder="Body"
                ></input>
                <input type="submit" value="Submit Reply"></input>
            </form>
        </>
    );
}

export default SingleForumPost;
