import { useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { SinglePointMap } from "./single-point-map";
import { UserContext } from "../../context/user-context";

export const HutRow = ({ hut, even }) => {
  const userContext = useContext(UserContext);
  const [dropped, setDropped] = useState(false);
  const isLogged = ["Hiker", "Local Guide"].includes(userContext.user.role);

  const toggleDrop = () => {
    setDropped((prev) => !prev);
  };


  return (
    <Row className={even ? "hike-row-even" : "hike-row"}>
      <Col>
        <Container fluid onClick={toggleDrop}>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={12}
              sm={12}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Name:</Col>
                </Row>
                <Row>
                  <Col>
                    {hut.name}
                  </Col>
                </Row>
              </Container>
            </Col>


            <Col
               className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={6}
              sm={6}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Number of beds:</Col>
                </Row>
                <Row>
                  <Col>{hut.numberOfBeds}</Col>
                </Row>
              </Container>
            </Col>

            <Col
               className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={6}
              sm={6}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Altitude:</Col>
                </Row>
                <Row>
                  <Col>
                    {parseInt(hut.point.altitude)} m
                  </Col>
                </Row>
              </Container>
            </Col>

            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={6}
              sm={4}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Website:</Col>
                </Row>
                <Row>
                  <Col>
                    {hut.optionalWebsite === "" ? " - " :  hut.optionalWebsite }
                  </Col>
                </Row>
              </Container>
            </Col> 

            <Col
               className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={6}
              sm={4}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Phone:</Col>
                </Row>
                <Row>
                  <Col>{hut.phone}</Col>
                </Row>
              </Container>
            </Col>
            <Col
               className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={12}
              sm={4}
              md={4}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold ">Email:</Col>
                </Row>
                <Row>
                  <Col>{hut.email}m</Col>
                </Row>
              </Container>
            </Col>
           
            
            <Col
              className="d-flex justify-content-center align-items-center my-3 text-center"
              xs={12}
              sm={12}
              md={12}
            >
              <Container fluid>
                <Row>
                  <Col className="fw-bold">Description:</Col>
                </Row>
                <Row>
                  <Col className={dropped ? "" : "text-truncate"}>
                    {hut.description}
                  </Col>
                </Row>
              </Container>
            </Col>
           

          </Row>

          {dropped && (
            <Row>
              <Col
                className="d-flex justify-content-center align-items-center my-3"
                xs={12}
              >
                {isLogged ? (
                  <SinglePointMap
                    point={hut.point}
                  />
                  ) : (
                    <>
                    <Link to='/login'>Log in</Link>&nbsp; to see more info
                    </>
                  )}
              </Col>
            </Row>
          )}
       

        </Container>
      </Col>
    </Row>
  );
};
