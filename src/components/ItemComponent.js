import React, { useContext } from 'react';
import { Context } from '..';
import star from '../images/star.png'
import {useNavigate} from 'react-router-dom'
import { ITEM_ROUTE } from '../utils/consts';

const ItemComponent = ({it}) => {
    const navigate = useNavigate()
    const {item} = useContext(Context)

    return (
        <div className='itemCol' onClick={() => navigate(ITEM_ROUTE + '/' + it.id)}>
            <div className='cursor-pointer border border-gray-400 rounded-lg h-auto' style={window.innerWidth < 640 ? {width: '204px'} : {width: '192px'}}>
                <img src={process.env.REACT_APP_API_URL + it.img} width={200} height={200} className='rounded-t-md overflow-hidden' alt=''/>
                <div className='flex justify-between mt-2 mx-1'>
                    <div className='text-slate-500 text-xs md:text-lg'>{item.types.map(type => <div>{type.id === it.typeId ? `${type.name}` : ''}</div>)}</div>
                    <div className='flex items-center'>
                        <div className='font-medium text-xs md:text-lg'>{it.rating}</div>
                        <img className='ml-1 w-4 h-4' src={star} width={15} height={15} alt=''/>
                    </div>
                </div>
                <div className='ml-1 font-medium text-base md:text-lg overflow-clip'>{it.name}</div>
                <div className='flex justify-end mr-2 font-medium text-sm md:text-lg'>От {it.price} ₽</div>
            </div>
        </div>
    );
};

export default ItemComponent;