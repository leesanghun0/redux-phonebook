import React, {useState} from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";


const SearchBox = ()=>{
    const [filterName, setFilterName]= useState("");
    const dispatch = useDispatch();
    let { contact } = useSelector((state) => state);
    const filterItem = (event) =>{
        event.preventDefault();
        dispatch({type:"FILTER_CONTACT",payload:{filterName}});
    }

    return(
    <Form onSubmit={filterItem} className="search-area">
        <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setFilterName(event.target.value)}/>
        </Col>
        <Col lg={2}>
            <Button variant="primary" type="submit">
                찾기
            </Button>
        </Col>
    </Row>

    </Form>)
}

export default SearchBox;