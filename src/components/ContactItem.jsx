import React from "react";
import { Col, Row } from "react-bootstrap"


const ContactItem =({item})=>{
    return(
    <Row className="contact-Card">
       <Col lg={1}>
            <img width={50} src="https://i1.sndcdn.com/avatars-000373844735-9n06kq-t240x240.jpg" alt="" />
       </Col>
       <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
       </Col>
    </Row>
    )
}

export default ContactItem;