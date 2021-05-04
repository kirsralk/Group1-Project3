import React from "react";
import "./style.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

function SingleForumPost(props) {
    return (
        <Container>
            <Row>
                <Col xs={11}>
                    <Row>
                        <h1 className="float-left">{props.post.title}</h1>
                    </Row>
                    <Row>
                        <p className="float-left">
                            created by {props.post.user}
                        </p>
                    </Row>
                </Col>
                <Col xs={1}>
                    <Button
                        variant="outline-light"
                        type="button"
                        onClick={props.closePost}
                        className="float-right"
                    >
                        X
                    </Button>
                </Col>
            </Row>
            <Row>
                <p>{props.post.body}</p>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={props.submitReply}>
                        <Form.Group id="form">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Reply..."
                                id="postBody"
                                name="PostBody"
                                className="replyInput"
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                id="submitReplytBtn"
                                className="float-right"
                            >
                                Submit Reply
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            {props.replies.map((value, index) => {
                return (
                    <Row key={index}>
                        <Col xs={2}>
                            <p className="replyUser">{value.user}: </p>
                        </Col>
                        <Col xs={10}>
                            <p className="replyText">{value.body}</p>
                        </Col>
                        <hr></hr>
                    </Row>
                );
            })}
        </Container>
    );
}

export default SingleForumPost;
