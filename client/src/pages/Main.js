import React from "react";
import Ticker from "../components/Ticker";
import Forum from "../components/Forum";
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollMarquee from "../components/ScrollMarquee";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton,
} from "react-twitter-embed";

function Main() {
  return (
    <>
      <div className="App">
        <Container fluid>
          <Row>
            <h1 class="big-title">¢rypto¢hat</h1>
          </Row>
          <Row>
            <Col>

              <img src="https://media.giphy.com/media/YnkMcHgNIMW4Yfmjxr/giphy.gif" className="padded"/>
              {/* <iframe src="https://giphy.com/embed/YnkMcHgNIMW4Yfmjxr" height="400" frameBorder="0"></iframe> */}
              <p>Advertisement</p>
            </Col>
            <Col>
              <h2 class="title">today's top 25</h2>
              <div className="tableContainer">
                <Ticker />
              </div> 
            </Col>
            <Col>
              <h2 class="title">twitter @crypto</h2>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="crypto"
                options={{ height: 400 }}
              />
            </Col>
          </Row>
            <h2 class="forum-title">forum</h2>
          <Row>
            <Forum />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
