import React, { useState } from 'react';
import { createType } from '../../../http/itemAPI';
import '../../../index.css';

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
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
                            Добавить новый тип
                        </h3>
                        <button onClick={onHide} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="type-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 my-2">
                        <label htmlFor="name" className='modalItemLabel'>Имя типа:</label>
                        <input type="text" id='name' required placeholder=' Введите название типа...' className='modalItemInput' value={value} onChange={e => setValue(e.target.value)}/>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modalFooter">
                        <button data-modal-toggle="type-modal" type="button" className="buttons" onClick={onHide}>Закрыть</button>
                        <button data-modal-toggle="type-modal" type="button" className="button" onClick={addType}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
)};

export default CreateType;