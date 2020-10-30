import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
// import { Link } from "react-router-dom";

import CardProfile from "../../../components/Utils/CardProfile";
import CardDiscipline from "../../../components/Utils/CardDiscipline";

export default function WishList() {
  const [user, setUser] = useState([]);
  const [discipline, setDisplines] = useState([]);
  const [w, setW] = useState("");

  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg", description: "Descrição do produto",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg", description: "Descrição do produto",
    },
    {
      id: 3, name: "Inglês", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg", description: "Descrição do produto",
    },
    {
      id: 2, name: "Hadware", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg", description: "Descrição do produto",
    },
    {
      id: 3, name: "Lógica de programação", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg", description: "Descrição do produto",
    },
  ];

  useEffect(() => {
    setUser(allowedState);
    setDisplines(allowedState);
    setW(window.innerWidth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg="3" md="6">
            <CardProfile profile={user} />
          </Col>
          <Col lg="8" md="6">
            <Col md={4}>
              Histórico de Compras
              <FormGroup>
                <InputGroup>
                  <Input
                    placeholder="Pesquisar"
                    type="text"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText><i className="fa fa-search" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg="12">
              <Row>
                {discipline.map((item) => (
                  <Col lg={w > 1245 ? "4" : "6"} className="mb-5">
                    <CardDiscipline discipline={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
