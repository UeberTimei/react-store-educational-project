import React, { useContext, useEffect, useState } from 'react';
import StarRating from '../components/StarRating';
import '../index.css'
import { useParams } from 'react-router-dom';
import { addToBasket, checkRating, fetchBasketItems, fetchOneItem, setRating } from '../http/itemAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Item = observer(() => {
    const {basket, user} = useContext(Context)
    const [item, setItem] = useState({info: []})
    const [resRate, setResRate] = useState("");
    const [isAccessRating, setIsAccessRating] = useState(false);

    const {id} = useParams()

    const description = item.info.filter(object => object.title !== 'Description')
    const definition = item.info.filter(object => object.title === 'Description')

    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
        if(user.isAuth) {
            checkRating({itemId: id}).then(res => setIsAccessRating(res.allow));
        }
    }, [id, resRate])

    const isItemInBasket = () => {
        const findItem = basket.basketItems.findIndex(prod => Number(prod.id) === Number(item.id));
        return findItem < 0
    }

    const addItem = (item) => {
        if(user.isAuth){
            addToBasket(item).then(() => basket.setBasketItems(item))
        } else {
            alert('You must register')
        }
    }

    const changedRating = (rate) => {
        setRating({rate, itemId: id}).then(res => setResRate(res))
    }


    return (
        <div className='container mx-auto py-56'>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                <img src={process.env.REACT_APP_API_URL + item.img} className='rounded-tl-2xl rounded-br-2xl md:w-80 lg:ml-6 w-48 ml-2 row-span-2' alt='' key={item.id}/>
                <div>
                    <h2 className='md:text-2xl -ml-3 md:ml-5 text-2xl' key={item.id}>{item.name}</h2>
                    <div className='-ml-3 md:ml-5 md:mt-5' key={item.rating}>
                        <StarRating changeRating={changedRating} ratingValue={item.rating} isAuth={user.isAuth} isAccessRating={isAccessRating}/>
                        <h2 className='flex'>{resRate}</h2>
                    </div>
                    <div className='grid max-w-sm w-full mt-4 -ml-3 md:ml-5 grid-rows-2'>
                        <h2 className='md:text-2xl md:pr-5 select-none text-xl font-semibold' key={item.id}>From {item.price}$</h2>
                        <div>
                            {isItemInBasket() ? 
                                <button className='button_buy mt-3' onClick={() => addItem(item)}>Add to cart</button>
                                :
                                <h1 className='mt-3 text-lg font-semibold text-indigo-500'>Item already in cart</h1>
                            }
                        </div>
                    </div>
                </div>
                <div className='text-2xl col-span-2 md:col-span-1 ml-2 items-stretch'>
                        {definition.map(info => 
                            <div className='' key={info.id}>
                                <h1 className='font-semibold'>{info.title}:</h1>
                                {info.content}
                            </div>
                        )}
                </div>
            </div>
            <div className='flex'>
                <div className='w-full max-w-full mt-5 pb-9'>
                    <h1 className='ml-5 font-semibold text-2xl'>{description.length ? 'Features:' : ''}</h1>
                    {description.map((info, index) => 
                        <div className={index % 2 === 0 ? 'bg-indigo-200 p-4 md:text-2xl text-xl' : 'bg-white p-4 md:text-2xl text-xl'} key={info.id}>
                            {info.title}: {info.content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Item;

/**
 * @param {{rating}}
 */