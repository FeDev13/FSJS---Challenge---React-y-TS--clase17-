import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";

export function Racquets() {
  const [display, setDisplay] = useState(false);

  const handleClose = () => setDisplay(false);
  const handleShow = () => setDisplay(true);

  let card = [
    {
      id: 1,
      title: "Wilson Blade Ultra  ",
      text: "text",
      price: "$200.000",
      img: "https://origin-prod-cms.wilson.com/sites/default/files/media/Blade_Body.jpg",
    },
    {
      id: 2,
      title: "Wilson Pro Staff",
      text: "text",
      price: "$150.000",
      img: "https://imageio.forbes.com/specials-images/imageserve/5f60e106f0e68f173158d6f6/0x0.jpg?format=jpg&width=1200",
    },
    {
      id: 3,
      title: "Wilson Clash ",
      text: "text",
      price: "$90.000",
      img: "https://cdn.shoplightspeed.com/shops/607570/files/12139834/wilson-clash-100-tour-tennis-racquet.jpg",
    },
  ];
  return (
    <>
      <CardGroup className="card-group">
        {card.map((Element) => (
          <Card className="text-center card" key={Element.id}>
            <Card.Img src={Element.img} alt="logo" />
            <Card.Body>
              <Card.Title> {Element.title}</Card.Title>
              <Card.Text>{Element.text}</Card.Text>
              <Card.Title> {Element.price}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Button variant="danger" className="d-flex m-auto" onClick={handleShow}>
        {" "}
        {/*funcion con useState chequea que exista display en modal, setea setDisplay en true que a su vez toma a display  */}
        Resumen de productos
      </Button>

      <Modal
        show={display}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nombre de los productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {card.map((Element) => (
            <div className="text-center" key={Element.id}>
              <Card.Title> {Element.title}</Card.Title>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
