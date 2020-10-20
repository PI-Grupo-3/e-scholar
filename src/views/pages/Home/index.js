import React from 'react';

import { Container, Row, Col, Button, CardHeader, Card } from "reactstrap";


export default function Home() {
  return (
    <>
      <Container fluid className="mb-5">
        <Row className="align-items-center pt-8 pb-8" style={{background: '#F3F6FA'}}>
          <Col md={6} style={{ background: '#EFF3F9'}} sm={12}>
            
          </Col>
          <Col md={6} sm={12}>
            <h3 className="text-primary mb-3">
              Sobre nós
            </h3>
            <h1 className="mb-3">
              E-SCHOLAR
            </h1>
            <div className="mb-5 h4 text-light ls-1">              
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, 
              nam no suscipit quaerendum. At nam minimum ponderum. 
              Est audiam animal molestiae te. Ex duo eripuit mentitum.
            </div>
            <Button color="primary" outline type="button">Contato</Button>
          </Col>
        </Row>
         
        <Col className="bg-secondary">
        <div style={{ marginLeft: 20, marginTop: 20 }}>
          <h1 style={{ color: "#828282", fontWeight: "bold", fontSize: 20 }}>
            Disciplinas
          </h1>
        </div>
          {Array(4).fill().map(() => (
            <Row className="pt-6 pb-6 justify-content-center align-items-center">
              <Col lg="3" md="6">
                <img
                  alt="disciplina"
                  style={{ width: 200, height: 200}}
                  src={require("assets/img/theme/team-4-800x800.jpg")}
                />
              </Col>  
              <Col lg="6" md="6">
                <h2>Lingua Portuguesa Concordância e Pontuação</h2>
                <Row>
                  <Col>
                    <i className="ni ni-air-baloon text-blue"></i>
                    <h4 className="text-light">
                      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                    </h4>
                  </Col>
                  <Col>
                    <i className="ni ni-air-baloon text-blue"></i>
                    <h4 className="text-light">
                      Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                    </h4>
                  </Col>
                </Row>
              </Col> 
            </Row> 
          ))}          
        </Col>           
      </Container>
    </>
  )
}

