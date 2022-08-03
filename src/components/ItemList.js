import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import ItemComponent from './ItemComponent';

const ItemList = observer(() => {
    const {item} = useContext(Context)

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 col-span-full row-span-full mb-20'>
            {item.items.map(i => 
                <ItemComponent key={i.id} it={i}/>
            )}
        </div>
    );
});

export default ItemList;