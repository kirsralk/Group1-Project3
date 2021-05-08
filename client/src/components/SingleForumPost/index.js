import React, { useState } from "react";
import "./style.css";
import { Container, Row, Form, Button, Col, Card } from "react-bootstrap";
import { formatDistance, parseISO } from "date-fns";

function SingleForumPost(props) {
    const [bodyValue, setBodyValue] = useState("");

    const handleChange = (event) => {
        setBodyValue(event.target.value);
    };
    return (
        <Container style={{marginBottom: "50px"}}>
            <Card className="backgroundCard">
                <Container id="singlePostCard">
                    <Row>
                        <Col xs={10}>
                            <Row  className="postHeader">
                                <h1 className="float-left">
                                    {props.post.title}
                                </h1>
                            </Row>
                            <Row  className="postHeader">
                                <p className="float-left">
                                    by {props.post.user} on{" "}
                                    {new Date(props.date).toDateString()}
                                </p>
                            </Row>
                        </Col>
                        <Col xs={1} id="closeBtn">
                            <Button
                                variant="link"
                                type="button"
                                onClick={props.closePost}
                                className="closeBtn"
                            >
                                X
                            </Button>
                        </Col>
                    </Row>
                    <Row className="postHeader">
                        <p className="postBody">{props.post.body}</p>
                    </Row>
                    <Row id="replyForm">
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
                                        onChange={handleChange}
                                    />
                                    {bodyValue.length > 0 ? (
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            id="submitReplytBtn"
                                            className="float-right"
                                            disabled={false}
                                        >
                                            Submit Reply
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            id="submitReplytBtn"
                                            className="float-right"
                                            disabled={true}
                                        >
                                            Submit Reply
                                        </Button>
                                    )}
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    {props.replies.map((value, index) => {
                        return (
                            <Card bg="dark" className="reply"  key={index}>
                                <Row noGutters={true}>
                                    <Col xs={2} className="userInfo">
                                        <h5 className="replyUserName">
                                            {value.user}
                                        </h5>
                                        <p className="replyUserDate">
                                            {formatDistance(
                                                parseISO(
                                                    new Date(
                                                        value.createdAt
                                                    ).toISOString()
                                                ),
                                                new Date(),
                                                { addSuffix: true }
                                            )}
                                        </p>
                                    </Col>
                                    <Col xs={10}>
                                        <p className="replyText">
                                            {value.body}
                                        </p>
                                    </Col>
                                    <hr></hr>
                                </Row>
                            </Card>
                        );
                    })}
                </Container>
            </Card>
        </Container>
    );
}

export default SingleForumPost;
