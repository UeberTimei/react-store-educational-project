import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import { deleteType, fetchTypes } from '../../../http/itemAPI';

const DeleteType = ({show, onHide}) => {
    const {item} = useContext(Context)

    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
    })

    const removeType = () => {
        deleteType(item.selectedType.id).then(data => {
            onHide()
            item.setSelectedType({})
        })
    }

    const closeButton = () => {
        onHide(false);
        setShowOptions(false)
        item.setSelectedType({})
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
                            Delete type
                        </h3>
                        <button onClick={closeButton} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="type-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 my-2">
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
                                className="origin-top-right absolute right--20 mt-2 ml-64 rounded-md shadow-lg bg-white ring-1 
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
                                        className="text-gray-700 block px-4 py-2 w-full text-sm hover:bg-slate-100" 
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
                    {/* <!-- Modal footer --> */}
                    <div className="modalFooter">
                        <button data-modal-toggle="type-modal" type="button" className="buttons" onClick={closeButton}>Close</button>
                        <button data-modal-toggle="type-modal" type="button" className="button" onClick={removeType}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteType;