import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function img(image, name) {
  return (
    <Col xs="12" lg="4">
      <img src={image} alt={name} width="100%" />
    </Col>
  );
}

function text(Hosteldetails, phno) {
  return (
    <Col xs="12" lg="6">
      <p>{Hosteldetails.description}</p>
      <p>
        <strong>Warden :</strong> {Hosteldetails.warden}
      </p>
      <p>
        <strong>Care Taker :</strong> {Hosteldetails.caretaker}
      </p>
      <p>
        <strong>Number of rooms :</strong> {Hosteldetails.rooms}
      </p>
      <p>
        <strong>Number of floors :</strong> {Hosteldetails.floors}
      </p>
      <p>
        <strong>Number of Inmates :</strong> {Hosteldetails.inmates}
      </p>
      <p>
        <strong>Warden Phone No :</strong> {phno}
      </p>
    </Col>
  );
}

function HostelCard({ name, phno, image, Hosteldetails, type }) {
  if (type === "2")
    return (
      <div
        // id={props.id}
        className="card"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <h2 align="center">{Hosteldetails.name}</h2>
        <div className="m-5">
          <Row>
            {img(image, name)}
            <Col xs="12" lg="1"></Col>
            {text(Hosteldetails, phno)}
          </Row>
        </div>
      </div>
    );
  else
    return (
      <div className="card">
        <h2 align="center">{name}</h2>
        <div className="m-5">
          <Row>
            {text(Hosteldetails, phno)}
            <Col xs="12" lg="2"></Col>
            {img(image, name)}
          </Row>
        </div>
      </div>
    );
}

function Facilities({ hasFacility, facilityName, description, image }) {
  if (hasFacility === true)
    return (
      <div>
        <center>
          <h1>Facilities</h1>
        </center>
        <div
          className="card"
          style={{ backgroundColor: "#ECECEC", textAlign: "center" }}
        >
          <h2>{facilityName}</h2>
          <div className="m-5">
            <Row>
              <Col xs="12" lg="6">
                <p>{description}</p>
              </Col>
              <Col xs="12" lg="2"></Col>
              <Col xs="12" lg="4">
                <img
                  src={image}
                  alt={facilityName}
                  width="100%"
                  style={{ margin: "auto" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

function GroupCards({ wname, wphno, cname, cphno, hsname, hsphno }) {
  return (
    <div>
      <Row>
        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Warden</Card.Title>
              <Card.Text>Name :{wname} </Card.Text>
              <Card.Text>Ph No. :{wphno} </Card.Text>
              <Card.Text>Department : </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Care Taker</Card.Title>
              <Card.Text>Name : {cname} </Card.Text>
              <Card.Text>Ph No. : {cphno} </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm="12" md="6" lg="4">
          <Card style={{ height: "250px" }}>
            <Card.Body>
              <Card.Title>Hostel Sec.</Card.Title>
              <Card.Text>Name :{hsname} </Card.Text>
              <Card.Text>Ph No. :{hsphno} </Card.Text>
              <Card.Text>Room No. : </Card.Text>
              <Card.Text>Department : </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export { HostelCard, Facilities, GroupCards };
