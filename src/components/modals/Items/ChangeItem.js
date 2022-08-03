import React, { useContext, useEffect, useState } from 'react';
import { fetchItems, fetchOneItem, fetchTypes, updateItem } from '../../../http/itemAPI';
import { Context } from '../../../index';

const ChangeItem = ({show, onHide}) => {
    const {item} = useContext(Context)

    const [showOptions, setShowOptions] = useState(false)
    const [showOptionsType, setShowOptionsType] = useState(false)

    const [name, setName] = useState(item.selectedItem.name)
    const [price, setPrice] = useState(item.selectedItem.price)
    const [file, setFile] = useState(item.selectedItem.img)

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '' , content: '', id: Date.now()}])
    }

    const removeInfo = (id) => {
        setInfo(info.filter(i => i.id !== id))
    }

    const changeInfo = (key, value, id) => {
        setInfo(info.map(i => i.id === id ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const closeButton = () => {
        onHide(false);
        setShowOptions(false)
    }

    useEffect(() => {
        fetchItems().then(data => item.setItems(data.rows))
        fetchTypes().then(data => item.setTypes(data))
    }, [])

    const putItem = () => {
        const formData = new FormData()
        formData.append('name', name ? name : item.selectedItem.name)
        formData.append('price', price ? `${price}` : `${item.selectedItem.price}`)
        formData.append('typeId', item.selectedType.id)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        updateItem(item.selectedItem.id, formData).then(data => {
            onHide()
            item.setSelectedType({})
        })
    }

    if (!show){
        return null
    }

    return (
        <div id="type-modal" className="modalItem">
            <div className="relative p-4 w-full max-w-2xl md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-gray-100 rounded-lg shadow-lg">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-start p-4 rounded-t border-b border-slate-300">
                        <h3 className="text-xl font-semibold text-gray-900 select-none md:ml-1">
                            Change item
                        </h3>
                        <button onClick={closeButton} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="type-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 my-2">
                        <div className='grid grid-rows-2 gap-4'>
                            {/* first dropdown */}
                            <div>
                                <button 
                                    onClick={() => setShowOptions(!showOptions)} 
                                    type="button" 
                                    className="changeItemModal" 
                                    id="menu-button" 
                                    aria-expanded="true" 
                                    aria-haspopup="true"
                                >
                                    {item.selectedItem.name || 'Item'}
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path 
                                            fillRule="evenodd" 
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </button>
                            </div>
                            {showOptions && 
                                <div 
                                    className="origin-top-right absolute right--20 mt-10 ml-1 rounded-md shadow-lg bg-white ring-1 
                                        ring-black ring-opacity-5 focus:outline-none" 
                                    role="menu" 
                                    aria-orientation="vertical" 
                                    aria-labelledby="menu-button" 
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                        {item.items.map(it =>
                                            <button 
                                                onClick={() => {
                                                    item.setSelectedItem(it);
                                                    item.types.map(type => type.id === it.typeId ? item.setSelectedType(type) : '')
                                                    fetchOneItem(item.selectedItem.id).then(data => setInfo(data.info))
                                                    setShowOptions(!showOptions);
                                                }} 
                                                className="text-gray-700 block px-4 py-2 text-sm w-full hover:bg-slate-100" 
                                                role="menuitem" 
                                                tabIndex="-1" 
                                                key={it.id}
                                            >
                                                {it.name}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            }
                            {/* second dropdown */}
                            <div>
                                <button 
                                    onClick={() => setShowOptionsType(!showOptionsType)} 
                                    type="button" 
                                    className="changeItemModal" 
                                    id="menu-button" 
                                    aria-expanded="true" 
                                    aria-haspopup="true"
                                >
                                    {item.selectedType.name || 'Тип'}
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path 
                                            fillRule="evenodd" 
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </button>
                            </div>
                            {showOptionsType && 
                                <div 
                                    className="origin-top-right absolute right--20 ml-8 mt-28 rounded-md shadow-lg bg-white ring-1 
                                        ring-black ring-opacity-5 focus:outline-none" 
                                    role="menu" 
                                    aria-orientation="vertical" 
                                    aria-labelledby="menu-button" 
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                        {item.types.map(type =>
                                            <button 
                                                onClick={() => {
                                                    item.setSelectedType(type);
                                                    setShowOptionsType(!showOptionsType);
                                                }} 
                                                className="text-gray-700 block px-4 py-2 text-sm w-full hover:bg-slate-100" 
                                                role="menuitem" 
                                                tabIndex="-1" 
                                                key={type.id}
                                            >
                                                {type.name}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            }
                            {/* fields */}
                            <div className='-ml-6'>
                                {/* name */}
                                <div className="p-6 my-2">
                                    <label htmlFor="name" className='modalItemLabel'>Name:</label>
                                    <input 
                                        type="text" 
                                        id='name' required 
                                        placeholder={item.selectedItem.name}
                                        className='modalItemInput'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                {/* price */}
                                <div className="p-6 my-2">
                                    <label htmlFor="price" className='modalItemLabel'>Price:</label>
                                    <input 
                                        type="number" 
                                        id='number' required 
                                        placeholder={item.selectedItem.price} 
                                        className='modalItemInput'
                                        value={price}
                                        onChange={e => setPrice(Number(e.target.value))}
                                    />
                                </div>
                                {/* img */}
                                <div className="p-6 my-2">
                                    <label htmlFor="type" className='modalItemLabel'>Image:</label>
                                    <input type="file" id='file' required onChange={selectFile}/>
                                </div>
                            </div>
                            {/* info */}
                            <button onClick={addInfo} className='button_info'>Add new info</button>
                                {info.map(i => 
                                    <div className='flex flex-row scroll-m-1' key={i.id}>
                                        <div className='grid grid-cols-3 w-full gap-3 grow'>
                                            <input 
                                                type="text" placeholder='Type name info' 
                                                className='info' 
                                                value={i.title} 
                                                onChange={(e) => changeInfo('title', e.target.value, i.id)}
                                            />
                                            <input 
                                                type="text" 
                                                placeholder='Type description info' 
                                                className='info' 
                                                value={i.content} 
                                                onChange={(e) => changeInfo('content', e.target.value, i.id)}
                                            />
                                            <button className='button_info_delete ml-auto mr-2' onClick={() => removeInfo(i.id)}>Delete</button>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modalFooter">
                        <button data-modal-toggle="type-modal" type="button" className="buttons" onClick={closeButton}>Close</button>
                        <button data-modal-toggle="type-modal" type="button" className="button" onClick={putItem}>Change</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeItem;