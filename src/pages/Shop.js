import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import ItemList from '../components/ItemList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchItems, fetchTypes } from '../http/itemAPI';
import '../index.css'

const Shop = observer(() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchItems(null, 1, window.innerWidth < 640 ? 6 : 12).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.page, 12).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType])

    return (
        <div className='container' style={{height: '100%'}}>
            <div className='grid auto-cols-auto auto-rows-auto mt-28'>
                <div className='flex mt-11 md:mt-4' >
                    <div className='block mt-3'>
                        <TypeBar/>
                    </div>
                    <div className='grid ml-6 grid-rows-2 grid-cols-4'>
                        <ItemList/>
                        <div className='col-start-4 flex justify-end'>
                            <Pages/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Shop;