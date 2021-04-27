import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function ApiTestComponent() {


    const handlePostSubmit = (event) => {
        event.preventDefault();
        API.createPost({
            user: "TEST USER",
            title: "TEST TITLE",
            body: "TEST BODY",
            replies: [],
            createdAt: Date.now()
        })
    };

    const handleReplySubmit = (event) => {
        event.preventDefault();
        API.createPost({
            user: "TEST USER",
            title: "TEST TITLE",
            body: "TEST BODY",
            replies: [],
            createdAt: Date.now()
        })
    };


    return (
        <>
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

export default ApiTestComponent;
