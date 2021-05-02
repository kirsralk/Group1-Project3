import React from "react";
import Ticker from "../components/Ticker";
import Forum from "../components/Forum";
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollMarquee from "../components/ScrollMarquee";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Main() {
  return (
    <>
      <div className="App">
        <Container fluid>
          <Row>
            <img src="../cryptochat.png" class="heading" />
          </Row>
          <Row>
            <Col>Test content</Col>
            <Col>
              <Ticker />
            </Col>
            <Col>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="crypto"
                options={{ height: 400 }}
              />
            </Col>
          </Row>
          <Row>
            <Forum />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
