import React, { useContext, useEffect, useState } from 'react';
import '../../../index.css';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';
import { createItem, fetchTypes } from '../../../http/itemAPI';

const CreateItem = observer(({show, onHide}) => {
    const {item} = useContext(Context)
    const [showOptions, setShowOptions] = useState(false)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
    })

    const addInfo = () => {
        setInfo([...info, {title: '' , content: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('typeId', item.selectedType.id)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => {
            onHide()
            item.setSelectedType({})
        })
    }

    const closeButton = () => {
        onHide(false);
        setShowOptions(false)
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
                            Add new item
                        </h3>
                        <button 
                            onClick={closeButton} 
                            type="button" 
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm 
                                p-1.5 ml-auto inline-flex items-center" 
                            data-modal-toggle="type-modal"
                        >
                            <svg 
                                className="w-5 h-5" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                                    clipRule="evenodd"
                                ></path>
                            </svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="relative inline-block text-left mt-5 ml-5">
                        <div>
                            <button 
                                onClick={() => setShowOptions(!showOptions)} 
                                type="button" 
                                className="typeModal" 
                                id="menu-button" 
                                aria-expanded="true" 
                                aria-haspopup="true"
                            >
                                {item.selectedType.name || 'Type'}
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
                                className="origin-top-right absolute right--20 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 
                                    ring-black ring-opacity-5 focus:outline-none z-50" 
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
                                            setShowOptions(!showOptions);
                                        }} 
                                        className="text-gray-700 block py-2 w-full text-sm hover:bg-slate-100" 
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
                    </div>
                    <div className="p-6 my-2">
                        <label htmlFor="name" className='modalItemLabel'>Name:</label>
                        <input 
                            type="text" 
                            id='name' required 
                            placeholder='Введите название вещи...' 
                            className='modalItemInput'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="p-6 my-2">
                        <label htmlFor="price" className='modalItemLabel'>Price:</label>
                        <input 
                            type="number" 
                            id='number' required 
                            placeholder='Введите цену вещи...' 
                            className='modalItemInput'
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="p-6 my-2">
                        <label htmlFor="type" className='modalItemLabel'>Image:</label>
                        <input type="file" id='file' required onChange={selectFile}/>
                    </div>
                    <button onClick={addInfo} className='button_info'>Add new info</button>
                    {info.map(i => 
                        <div className='flex flex-row scroll-m-1' key={i.number}>
                            <div className='grid grid-cols-3 w-full gap-3 grow'>
                                <input 
                                    type="text" placeholder='Type name info' 
                                    className='info' 
                                    value={i.title} 
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                />
                                <input 
                                    type="text" 
                                    placeholder='Type description info' 
                                    className='info' 
                                    value={i.content} 
                                    onChange={(e) => changeInfo('content', e.target.value, i.number)}
                                />
                                <button className='button_info_delete ml-auto mr-2' onClick={() => removeInfo(i.number)}>Delete</button>
                            </div>
                        </div>
                    )}
                    {/* <!-- Modal footer --> */}
                    <div className="modalFooter">
                        <button data-modal-toggle="type-modal" type="button" className="buttons" onClick={closeButton}>Close</button>
                        <button data-modal-toggle="type-modal" type="button" className="button" onClick={addItem}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CreateItem;