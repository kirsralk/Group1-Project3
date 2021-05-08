import React from "react";
import "./style.css";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import { formatDistance, parseISO } from "date-fns";

function AllForumPosts(props) {
    return (
        <Container>
            <Card className="backgroundCard">
                <Container>
                    <Row>
                        <Col>
                            <h1>Create a Post</h1>
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
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        id="submitPostBtn"
                                    >
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>

                            <Row>
                                {props.posts.map((value, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            onClick={() =>
                                                props.clickPost(value)
                                            }
                                            className="postCards"
                                            bg="dark"
                                        >
                                            <Card.Header className="leftText">
                                                <h3>{value.title}</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text className="leftText">
                                                    <h5>{value.body}</h5>
                                                </Card.Text>
                                                <Card.Footer>
                                                    <Row>
                                                        <Col xs={4}>
                                                            <Card.Subtitle className="mb-2 text-muted">
                                                                <p className="postUserText">
                                                                    {value.user}
                                                                </p>
                                                            </Card.Subtitle>
                                                        </Col>
                                                        <Col xs={4}>
                                                            <Card.Subtitle className="mb-2 text-muted">
                                                                {formatDistance(
                                                                    parseISO(
                                                                        value.createdAt
                                                                    ),
                                                                    new Date(),
                                                                    {
                                                                        addSuffix: true,
                                                                    }
                                                                )}
                                                            </Card.Subtitle>
                                                        </Col>
                                                        <Col xs={4}>
                                                            <Card.Subtitle className="mb-2 text-muted">
                                                                <p>
                                                                    {
                                                                        value
                                                                            .replies
                                                                            .length
                                                                    }{" "}
                                                                    replies
                                                                </p>
                                                            </Card.Subtitle>
                                                        </Col>
                                                    </Row>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    );
}

export default AllForumPosts;
