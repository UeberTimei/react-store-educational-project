import React, { useState } from 'react';
import { TG_ROUTE, VK_ROUTE } from '../../utils/consts';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Order = ({show, onHide, order, deleteBasketItems}) => {
    const [copied, setCopied] = useState(false)

    if (!show){
        return null
    }

    return (
        <div id="type-modal" className="modalItem">
            <div className="relative p-4 w-full max-w-md md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-gray-100 rounded-lg shadow-lg">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-start p-4 rounded-t border-b border-slate-300">
                        <h3 className="text-xl font-semibold text-gray-900 select-none md:ml-1">
                            Make order
                        </h3>
                        <button onClick={onHide} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="type-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-3">
                        <div className='flex justify-center items-center mb-4'>
                            <CopyToClipboard text={order} onCopy={() => setCopied(true)}>
                                <button className='buttonOrder' >Copy order</button>
                            </CopyToClipboard>
                            {copied && <span className='absolute mt-5 ml-1'>Your order has been copied!</span>}
                        </div>
                        <div className='flex justify-center'>
                            <a href={TG_ROUTE} onClick={deleteBasketItems}>
                                <svg xmlns="http://www.w3.org/2000/svg"  className='mr-2 transition hover:scale-125 ease-in cursor-pointer' viewBox="0 0 48 48" width="64px" height="64px"><path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"/><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"/><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"/></svg>
                            </a>
                            <a href={VK_ROUTE} onClick={deleteBasketItems}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='ml-2 transition hover:scale-125 ease-in cursor-pointer' viewBox="0 0 48 48" width="64px" height="64px"><path fill="#1976d2" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"/></svg>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modalFooterOrder">
                        <button data-modal-toggle="type-modal" type="button" className="buttons" onClick={onHide}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;