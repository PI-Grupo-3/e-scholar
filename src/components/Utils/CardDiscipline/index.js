import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardBody, CardFooter, Badge } from 'reactstrap';

import moment from 'moment';

import Carousel from "react-multi-carousel";

const CardAd = ({ ad, premium }) => {
  const history = useHistory();
  const [percentageBelow, setPercentageBelow] = useState('');
  const today = moment().format('YYYY-MM-DD');

  const responsivePhoto = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  };

  useEffect(() => {
    if (ad.veicle_type !== 3) {
      getPercentageBelow(ad.sale_price, ad.texto_valor)
    } else {
      getPercentageBelow(ad.truck_price, ad.texto_valor)
    }
  }, [ad.sale_price, ad.texto_valor, ad.truck_price, ad.veicle_type]);

  async function getPercentageBelow(price, fipeValue) {
    let percentage = (100 - ((price * 100) / parseInt((fipeValue.replace("R$", "").replace(/\./g, '').replace(",", "."))))).toFixed(2)
    setPercentageBelow(percentage)
  }

  async function handleOpenAd(id) {
    try {
      history.push(premium ? `/auth/payment/${premium}/${id}` : `/auth/details/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <>
        <Card
          className="Card shadow-sm center"
          style={{ aspectRatio: "16:10", cursor: 'pointer' }}
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsivePhoto}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={responsive !== "mobile" ? true : false}
            // autoPlaySpeed={8000}
            keyBoardControl={true}
            customTransition="transform 750ms ease-in-out"
            transitionDuration={750}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {ad.images.map(image => (
              <CardImg
                onClick={() => handleOpenAd(ad.id)}
                alt="..."
                src={image.url}
                top
                className="mb--3"
                style={{ maxHeight: 300, width: "100%", objectFit: "cover" }}
              />
            ))}
          </Carousel>
          <CardBody
            className="text text-left mb--5"
            style={{ height: "51%" }}
            onClick={() => handleOpenAd(ad.id)}
          >
            {ad.premium_ad > 0 && ad.premium_date >= today ? (
              <>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Badge
                    className="mb-2"
                    color="default"
                    pill
                    style={{ backgroundColor: "#0BB6DC" }}
                  >
                    DESTAQUE
                  </Badge>
                </div>
              </>
            ) : (
                <>
                  <div style={{ height: 28 }}></div>
                </>
              )}
            <Row>
              <Col>
                <p
                  className="h4"
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {ad.brand} {ad.model}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="h4 w-100">
                  <span style={{ color: '#205FE5' }}>FIPE:</span> {ad.texto_valor}
                </p>
              </Col>
            </Row>
            {ad.veicle_type === 3 ?
              <>
              </>
              :
              <>
                <Row>
                  <Col>
                    <p className="h4 w-100">
                      <span style={{ color: '#205FE5' }}>
                        {percentageBelow > 0 ? "Abaixo" : "Acima"} da Tabela:
                      </span>
                      &nbsp;{percentageBelow > 0 ? percentageBelow : (percentageBelow * -1)} %
                    </p>
                  </Col>
                </Row>
              </>
            }
            <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Col lg="7">
                <span mt="2" mb="2" style={{ fontWeight: "bold", fontSize: 18 }}>R$ {(ad.sale_price).toLocaleString('pt-br', { minimumFractionDigits: 0 })} </span>
              </Col>
              <Col className='d-flex justify-content-end'>
                <span mt="2" mb="2" style={{ fontSize: 12 }}>
                  {(ad.mileage).toLocaleString('pt-br', { minimumFractionDigits: 0 })} Km
                </span>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="mt-3 text-center">
                <p className="h4 w-100">
                  {
                    ad.status === 0 ? (
                      <span style={{ color: '#FF931E' }}>PENDENTE DE APROVAÇÃO</span>
                    ) : ad.status === 2 ? (
                      <>
                        <span style={{ color: 'red' }}>REPROVADO</span>
                        <p>{ad.status_feedback}</p>
                      </>
                    ) : ''}
                </p>
              </Col>
            </Row>
          </CardBody>
          <CardFooter
            className="small text-center mt-5"
            style={{ height: 30 }}
          >
            <div className="mt--2" style={{ height: 30 }}>
              <i class="fas fa-map-marker-alt"></i> {ad.ad_city} -{" "}
              {ad.state}
            </div>
          </CardFooter>
        </Card>
      </>
    </Container>
  );
};

export default CardAd;
