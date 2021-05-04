import React from "react";
import "./style.css";
import { Container, Row, Form, Button } from "react-bootstrap";

function SingleForumPost(props) {
    return (
        <>
            <Container fluid>
                <Row>
                    <p>
                        {props.post.title} created by {props.post.user}
                    </p>
                    <Button type="button" onClick={props.closePost}>
                        X
                    </Button>
                </Row>
                <Form onSubmit={props.submitReply}>
                    <Form.Group id="form">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Reply..."
                            id="postBody"
                            name="PostBody"
                            className="postInputs"
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            id="submitPostBtn"
                        >
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
                {props.replies.map((value, index) => {
                    return (
                        <Row key={index}>
                            <p>{value.user}: </p>
                            <p>{value.body}</p>
                            <hr></hr>
                        </Row>
                    );
                })}
            </Container>
        </>
    );
}

export default SingleForumPost;
