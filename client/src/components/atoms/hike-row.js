import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
export const HikeRow = ({ hike, even }) => {
  const [dropped, setDropped] = useState(false);

  const toggleDrop = () => {
    setDropped((prev) => !prev);
  };
  return (
    <Row className={even ? "hike-row-even" : "hike-row"}>
      <Col>
        <Container>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={4}
              md={2}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Title:</Col>
                </Row>
                <Row>
                  <Col>{hike.title}</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={2}
              md={1}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Length:</Col>
                </Row>
                <Row>
                  <Col>{hike.lenght}m</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={2}
              md={1}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Time:</Col>
                </Row>
                <Row>
                  <Col>{hike.expectedTime}min</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={2}
              md={1}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Ascent:</Col>
                </Row>
                <Row>
                  <Col>{hike.ascent}m</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={4}
              md={2}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Difficulty:</Col>
                </Row>
                <Row>
                  <Col>{hike.difficult}</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={6}
              md={4}
            >
              <Container>
                <Row>
                  <Col className="fw-bold">Description:</Col>
                </Row>
                <Row>
                  <Col>{hike.description}</Col>
                </Row>
              </Container>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center my-3"
              xs={2}
              md={1}
            >
              {dropped ? (
                <ChevronCompactUp onClick={toggleDrop} />
              ) : (
                <ChevronCompactDown onClick={toggleDrop} />
              )}
            </Col>
          </Row>
          {dropped && (
            <Row style={{ height: 100 }}>
              <Col
                className="d-flex justify-content-center align-items-center my-3"
                xs={12}
              >
                Log in to see more info
              </Col>
            </Row>
          )}
        </Container>
      </Col>
    </Row>
  );
};