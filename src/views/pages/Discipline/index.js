import React, { useState, useEffect} from 'react'

import {
  Container,
  Col,
  Row,
  Button,
  Card,
  CardBody,
  UncontrolledCollapse
} from 'reactstrap'

export default function Discipline() {
  const [array, setArray] = useState([]);

  const allowedState = [
    {
      id: 1, name: "Português: Pontuação", alunos: 59, lucro: 299.00, uri: "https://s3.amazonaws.com/midia.korntraducoes.com.br/wp-content/uploads/2018/06/14103621/Depositphotos_68180183_original.jpg",
    },
    {
      id: 2, name: "Matemática", alunos: 99, lucro: 475.00, uri: "https://sto-blog.s3.amazonaws.com/images/2018/06/13/matematica-o-guia-completo.jpg",
    },
    {
      id: 3, name: "Inglês", alunos: 159, lucro: 799.00, uri: "https://www.fapcom.edu.br/wp-content/uploads/2019/02/Dicas-para-melhorar-o-ingl%C3%AAs-1-750x500.jpeg",
    },
    {
      id: 4, name: "Hadware", alunos: 99, lucro: 475.00, uri: "https://i.ytimg.com/vi/IfpbpvP-FgU/maxresdefault.jpg",
    },
    {
      id: 5, name: "Lógica de programação", alunos: 159, lucro: 799.00, uri: "https://becode.com.br/wp-content/uploads/2016/06/Algoritmos-1.jpg",
    },
  ];

  useEffect(() => {
    setArray(allowedState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <Col className="mt-4">
        <h3 className="text-primary mb-3">
          Português
        </h3>
      </Col>
      <Row className="align-items-center pt-8 pb-8" style={{ background: "#F3F6FA" }}>

        <Col md={8} style={{ background: "#EFF119" }} sm={12} lg={8}>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Col>
        <Col md={4} sm={12} lg={4}>
          <h3 className="text-primary mb-3">
            Conteúdo
          </h3>
          {array.map(item => {
            return (
              <>
                <Button block style={{ color: "#797575", backgroundColor:'#fff' }} size="lg" type="button" id="linkToggler" className="mb-3 text text-left">
                  {item.name}{item.id}
                </Button>
                <UncontrolledCollapse  toggler="#linkToggler ">
                  <Card>
                    <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt magni, voluptas debitis similique porro a molestias
                        consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </>
            )
          })}
        </Col>
      </Row>
      <Col lg="9" md="6" className="pl-8">
        <h2 className="mt-4">
          Descrição da aula
        </h2>
        <h4>
          Curabitur viverra tristique nulla eu maximus. Phasellus lacinia neque
          at libero iaculis lobortis. Vestibulum dapibus auctor nulla non facilisis.
          Duis magna felis, aliquet ut aliquam et, efficitur sit amet nisl.
          Etiam dapibus dolor a quam tristique, at dignissim mauris imperdiet.
          Vivamus egestas lectus vitae condimentum consectetur.
        </h4>
      </Col>
      <Col lg="9" md="6" className="pl-8">
        <h2 className="mt-4">
          Sobre o autor
        </h2>
        <h4>
          Curabitur viverra tristique nulla eu maximus. Phasellus lacinia neque
          at libero iaculis lobortis. Vestibulum dapibus auctor nulla non facilisis.
          Duis magna felis, aliquet ut aliquam et, efficitur sit amet nisl.
          Etiam dapibus dolor a quam tristique, at dignissim mauris imperdiet.
          Vivamus egestas lectus vitae condimentum consectetur.
        </h4>
        <h4>
          Aenean posuere lectus eget tellus rhoncus sagittis.
          Sed nisl turpis, pretium porttitor nisl in, cursus ullamcorper nisi.
          Nulla cursus efficitur iaculis. Nullam in convallis lorem. Fusce mattis
          imperdiet pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Morbi non tellus ut lorem dapibus viverra quis at magna. Suspendisse et libero volutpat,
          condimentum augue vel, sollicitudin felis. Quisque eleifend congue ipsum id cursus.
          Donec sed porta odio, sed aliquet mi. Nullam eu mauris sit amet mi ornare maximus.
          Proin condimentum augue sed tellus lacinia sagittis. Donec sit amet blandit lacus.
          Morbi venenatis lectus eu arcu blandit ullamcorper. In sed nisl libero.
        </h4>
      </Col>
    </Container>
  )
}
