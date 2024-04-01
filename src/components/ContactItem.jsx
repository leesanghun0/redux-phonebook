import React from "react";
import { Col, Row } from "react-bootstrap"


const ContactItem =({item})=>{
    return(
    <Row className="contact-Card">
       <Col lg={1}>
            <img width={80} src="https://i1.sndcdn.com/avatars-000373844735-9n06kq-t240x240.jpg" alt="" />
       </Col>
       <Col lg={11} className="contact-Card-text">
            <div className="user-info">
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>  
            </div>
            <div>
                <i className="xi-call"></i>
                <i className="xi-mail"></i>
                <i className="xi-star"></i>
            </div>
       </Col>
    </Row>
    )
}

export default ContactItem;