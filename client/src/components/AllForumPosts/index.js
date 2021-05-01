import React from "react";
import "./style.css";
import API from "../../utils/API";

function AllForumPosts(props) {

    return (
        <>
            {props.posts.map((value, index) => {
                return (
                    <div key={index} onClick={() => props.clickPost(value)}>
                        <p id={value._id}>
                            {value.title} created by {value.user}
                        </p>
                        <p>replies: {value.replies.length}</p>
                        <hr></hr>
                    </div>
                );
            })}
            <form action="/action_page.php" onSubmit={props.submitPost}>
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
    );
}

export default AllForumPosts;
