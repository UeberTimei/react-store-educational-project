import React, {useState} from 'react';
import '../index.css';
import CreateType from '../components/modals/Types/CreateType';
import CreateItem from '../components/modals/Items/CreateItem';
import ChangeType from '../components/modals/Types/ChangeType';
import DeleteType from '../components/modals/Types/DeleteType';
import ChangeItem from '../components/modals/Items/ChangeItem';
import DeleteItem from '../components/modals/Items/DeleteItem';

const Admin = () => {
    const [createTypeVisable, setCreateTypeVisable] = useState(false)
    const [changeTypeVisable, setChangeTypeVisable] = useState(false)
    const [deleteTypeVisable, setDeleteTypeVisable] = useState(false)

    const [createItemVisable, setCreateItemVisable] = useState(false)
    const [changeItemVisable, setChangeItemVisable] = useState(false)
    const [deleteItemVisable, setDeleteItemVisable] = useState(false)

    return (
        <div className='flex justify-center items-center py-64'>
            <div className='ml-6 border border-cyan-300 rounded-lg p-5'>
                <p className='flex justify-center font-semibold text-3xl mb-5'>Instruments:</p>
                <div className='grid grid-rows-2 flex-col justify-center items-center'>
                    <ul className='flex flex-col md:flex-row'>
                        <span className='flex justify-center text-2xl mb-3 mr-4'>For types:</span>
                        <button className='button_admin' onClick={() => setCreateTypeVisable(true)}>Add type</button>
                        <button className='button_admin' onClick={() => setDeleteTypeVisable(true)}>Delete type</button>
                        <button className='button_admin' onClick={() => setChangeTypeVisable(true)}>Change type</button>
                    </ul>
                    <ul className='flex flex-col md:flex-row'>
                        <span className='flex justify-center text-2xl mb-3 mr-4'>For items:</span>
                        <button className='button_admin' onClick={() => setCreateItemVisable(true)}>Add item</button>
                        <button className='button_admin' onClick={() => setDeleteItemVisable(true)}>Delete item</button>
                        <button className='button_admin' onClick={() => setChangeItemVisable(true)}>Change item</button>
                    </ul>
                </div>
            </div>

            <CreateType show={createTypeVisable} onHide={() => setCreateTypeVisable(false)}/>
            <ChangeType show={changeTypeVisable} onHide={() => setChangeTypeVisable(false)}/>
            <DeleteType show={deleteTypeVisable} onHide={() => setDeleteTypeVisable(false)}/>

            <CreateItem show={createItemVisable} onHide={() => setCreateItemVisable(false)}/>
            <ChangeItem show={changeItemVisable} onHide={() => setChangeItemVisable(false)}/>
            <DeleteItem show={deleteItemVisable} onHide={() => setDeleteItemVisable(false)}/>
        </div>
    );
};

export default Admin;