import React from "react";
import "./style.css";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";

function AllForumPosts(props) {
    return (
        <>
            {props.posts.map((value, index) => {
                return (
                    <Card
                        key={index}
                        onClick={() => props.clickPost(value)}
                        className="postCards"
                        bg="dark"
                    >
                        <Card.Header>{value.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>{value.body}</Card.Text>
                            <Card.Footer>
                                <Row>
                                    <Col lg={6}>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <p className="postUserText">{value.user}</p>
                                        </Card.Subtitle>
                                    </Col>
                                    <Col lg={6}>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <p>{value.replies.length} replies</p>
                                        </Card.Subtitle>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                );
            })}

            <Form bg="dark" onSubmit={props.submitPost}>
                <Form.Group id="form">
                    <Form.Control
                        placeholder="Post Title..."
                        id="postTitle"
                        name="postTitle"
                        className="postInputs"
                    />
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Post Body..."
                        id="postBody"
                        name="PostBody"
                        className="postInputs"
                    />
                    <Button variant="primary" type="submit" id="submitPostBtn">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default AllForumPosts;
