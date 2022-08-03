import React, {useContext} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";

const BasketItem = ({item}) => {
    const {basket} = useContext(Context);

    return (
        <Card key={item.id} style={{width: "100%"}}>
            <Card.Body className='md:ml-16 xl:ml-40'>
                <Row>
                    <Col xs={4}>
                        <img src={process.env.REACT_APP_API_URL + item.img} className='rounded-3xl lg:ml-20 xl:ml-40 2xl:ml-72' style={{width: "100%", maxWidth: 250}} alt=''/>
                    </Col>
                    <Col xs={4} className='lg:ml-10 w-3/12 break-normal md:w-4/12 lg:w-3/12'>
                        <Row>
                            <Col xs={12}>
                                <NavLink className='text-lg font-medium hover:text-cyan-500 hover:border-b-2 hover:border-emerald-200' to={`/item/${item.id}`}>{item.name}</NavLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className='w-5/12 md:w-4/12 xl:w-2/12'>
                        <Row>
                            <Col xs={12} className="flex justify-center">
                                <button className='button ml-12' onClick={() => basket.setDeleteBasketItem(item)}>Remove from cart</button>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={12} className="flex justify-center text-lg">
                                Amount:
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col xs={12} className="flex justify-center">
                                <Button variant="outline-primary" className='w-10 h-10' onClick={() => basket.setCountBasketItems(item.id, "+")}>+</Button>
                                <input className="mx-2 px-2 w-5/12 md:w-1/4 lg:w-1/4 xl:w-12" type="number" onChange={e =>basket.setCountBasketItems(Number(e.target.value))} value={item.count}/>
                                <Button variant="outline-primary" className='w-10 h-10' onClick={() => basket.setCountBasketItems(item.id, "-")}>-</Button>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={12} className="flex justify-center font-semibold text-base lg:text-xl">
                                Total price: from {item.price * item.count} $
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
)};

export default BasketItem;

// import React, {useContext} from 'react';
// import {Button, Card, Col, Image, Row} from "react-bootstrap";
// import {Context} from "../index";
// import {NavLink} from "react-router-dom";

// const BasketItem = ({item}) => {
//     const {basket} = useContext(Context);

//     return (
//         <Card key={item.id} style={{width: "100%"}} className="mb-3">
//             <Card.Body>
//                 <Row>
//                     <Col xs={4}>
//                         <Image src={process.env.REACT_APP_API_URL + item.img} style={{width: "100%", maxWidth: 250}} />
//                     </Col>
//                     <Col xs={4}>
//                         <Row>
//                             <Col xs={12}>
//                                 <b>Title:</b> <NavLink to={`/item/${item.id}`}>{item.name}</NavLink>
//                             </Col>
//                         </Row>


//                     </Col>
//                     <Col xs={4}>
//                         <Row>
//                             <Col xs={12} className="d-flex justify-content-center">
//                                 <Button variant="outline-dark" onClick={() => basket.setDeleteBasketItem(item)}>Delete from Cart</Button>
//                             </Col>
//                         </Row>
//                         <Row className="mt-5">
//                             <Col xs={12} className="d-flex justify-content-center">
//                                 Count:
//                             </Col>
//                         </Row>
//                         <Row className="mt-2">
//                             <Col xs={12} className="d-flex justify-content-center">
//                                 <Button variant="outline-dark" onClick={() => basket.setCountBasketItems(item.id, "+")}>+</Button>
//                                 <input className="ml-2 mr-2 pl-2 pr-2" style={{width: "20%"}} type="number" onChange={e =>basket.setCountBasketItems(Number(e.target.value))} value={item.count}/>
//                                 <Button variant="outline-dark" onClick={() => basket.setCountBasketItems(item.id, "-")}>-</Button>
//                             </Col>
//                         </Row>
//                         <Row className="mt-5">
//                             <Col xs={12} className="d-flex justify-content-center">
//                                 Price: {item.price * item.count} RUB
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Card.Body>
//         </Card>
// )};

// export default BasketItem;