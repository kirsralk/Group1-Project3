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
            <img src="../cryptochat.png" class="heading" alt="Welcome to Crypto Chat"/>
          </Row>
          <Row>
            <Col>
              <img src="https://media.giphy.com/media/YnkMcHgNIMW4Yfmjxr/giphy.gif" class="padded"/>
              {/* <iframe src="https://giphy.com/embed/YnkMcHgNIMW4Yfmjxr" height="400" frameBorder="0"></iframe> */}
              <p>Advertisement</p>
            </Col>
            <Col>
              <img src="../top25.png" class="subheading" alt="Top 25" />
              <div class="tableContainer">
                <Ticker />
              </div> 
            </Col>
            <Col>
              <img src="../twitter.png" class="subheading" alt="Twitter @Crypto" />
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="crypto"
                options={{ height: 400 }}
              />
            </Col>
          </Row>
          <Row>
            {/* <img src="../twitter.png" class="subheading" alt="" /> */}
            <Forum />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
