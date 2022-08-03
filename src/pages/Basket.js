import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Context } from '..';
import emptyBasket from '../images/emptyBasket.png'
import BasketItem from '../components/BasketItem'
import Order from '../components/modals/Order';
import '../index.css'
import { deleteBasketItem } from '../http/itemAPI';

const Basket = observer(() => {
    const {basket} = useContext(Context);
    const [orderVisable, setOrderVisable] = useState(false)
    const orderItems = []
    basket.basketItems.map(data => orderItems.push(`${data.name} ${data.count} pieces`))
    const order = orderItems.join(', ')

    if(basket.basketItems.length === 0) {
        return (
            <div className="flex flex-column items-center my-52">
                <img alt='' src={emptyBasket} className='w-96'/>
                <div className="mt-5"><span className='font-medium text-3xl'>Cart is empty...</span></div>
            </div>
        )
    }

    const deleteBasketItems = () => {
        basket.basketItems.map(item => deleteBasketItem(item.id))
        basket.setDeleteAllBasketItems()
    }

    return (
        <div className='py-20'>
            <div>
                <div className='grid grid-rows-2 justify-end mt-44 mr-10'>
                    <button className='basketOrder' onClick={() => setOrderVisable(true)}>Make order</button>
                    <div className='flex text-xl font-medium justify-center items-center'>
                        Total price: from {basket.totalPrice}$
                    </div>
                </div>
                <Order deleteBasketItems={deleteBasketItems} order={order} show={orderVisable} onHide={() => setOrderVisable(false)}/>
            </div>
            <Row className="mt-10 pb-24">
                <Col xs={12}>
                    {basket.basketItems.map(item => <BasketItem key={item.id} item={item}/>)}
                </Col>
            </Row>
        </div>
    );
});

export default Basket;
