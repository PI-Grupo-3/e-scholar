import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container as div,
  Col,
  Row,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default function HistCompras() {
  return ( 
    <div className="row">
      <Col md={3}>
        <Card>
          <CardImg
            alt="..."
            src={require("assets/img/theme/react.jpg")}
            top
          />
          <Button color="secondary" outline type="button">
            Editar Perfil
          </Button>
          <Button color="secondary" outline type="button">
            Minhas Disciplinas
          </Button> <Button color="secondary" outline type="button">
            Histórico de Compras
          </Button>
          <Button color="secondary" outline type="button">
            Lista de Desejos
          </Button> 
        </Card>
      </Col>
      <Row>
        <Col md={5} className="justify-d-flex-between">            
          <FormGroup>
            <InputGroup>
              <Input
                placeholder="Pesquisar"
                type="text"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText><i className="fa fa-search"></i></InputGroupText>
              </InputGroupAddon>
              <i md={12} className="fa fa-search"></i>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col lg={3} md={4}>
          <Card >
            <CardImg
              alt="..."
              src={require("assets/img/theme/matematica-image.jpg")}
              top
            />
            <CardBody>
              <Button color="secondary" type="button">
                Ver Mais
              </Button>
              <CardTitle>Matemática</CardTitle>
              <CardText>
                <small className="text-muted">Lógica</small>
              </CardText>
              <CardText>
                Descrição da disciplina etc...
              </CardText>
              <CardText>
                <small className="text-muted">R$ 000,00</small>
              </CardText>
            </CardBody>
          </Card>  
        </Col>
      </Row>
    </div>
  );
}
