import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
  Container
} from "reactstrap";

function Teste() {
  return (
    <>
      <Container>

      <Col md={3}>
      
      <div className="card-deck">
        {Array(3).fill().map(item => {
          return (
            <Card>
              <CardImg
                alt="..."
                src={require("assets/img/theme/team-4-800x800.jpg")}
                top
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          )
        })}          
        </div>
        </Col>
      </Container>

    </>
  )
}

export default Teste;