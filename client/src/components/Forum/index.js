import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function ApiTestComponent() {


    const handleSubmit = (event) => {
        event.preventDefault();
        API.createPost({
            user: "TEST USER",
            title: "TEST TITLE",
            body: "TEST BODY",
            replies: [],
            createdAt: Date.now
        })
    };


    return (
        <>
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <input type="text" id="lname" name="lname"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
}

export default ApiTestComponent;
