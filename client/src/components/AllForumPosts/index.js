import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";

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

            <Form onSubmit={props.submitPost}>
                <Form.Group id="form">
                    <Form.Control placeholder="Post Title..." id="postTitle" name="postTitle"/>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Post Body..."
                        id="postBody"
                        name="PostBody"
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default AllForumPosts;
