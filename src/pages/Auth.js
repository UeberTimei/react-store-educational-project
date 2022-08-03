import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';
import {Context} from '../index.js';
import {MdOutlineVisibility, MdOutlineVisibilityOff} from 'react-icons/md'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(MdOutlineVisibilityOff)

    const handleToggle = () => {
        if(type === 'password'){
            setIcon(MdOutlineVisibility)
            setType('text')
        } else {
            setIcon(MdOutlineVisibilityOff)
            setType('password')
        }
    }

    const auth = async () => {
        try {
            setType('password')
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
            alert('Activate your account')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='container mx-auto flex justify-center items-center' style={{height: window.innerHeight - 79}}>
            <div style={{width: 500}} className='p-4 bg-cyan-200 opacity-80 rounded-2xl'>
                <h2 className='m-auto font-bold text-xl select-none'>{isLogin ? 'Authorication' : 'Registration'}</h2>
                <div>
                    <div className='grid grid-rows-2'>
                        <input className='inputAuth' placeholder='Type your email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <div className='grid grid-cols-2'>
                            <input className='inputAuth col-span-2' type={type} placeholder='Type your password' value={password} onChange={e => setPassword(e.target.value)}/>
                            <button className='md:ml-48 ml-36 col-start-2 -mt-8' onClick={handleToggle}>{icon}</button>
                        </div>
                        
                        
                    </div>
                    <div className='flex-row flex justify-between'>
                        {isLogin ?
                            <div className='mt-3 font-bold'>Don't have account? <NavLink to={REGISTRATION_ROUTE} className='hover:underline hover:text-indigo-600'>Register!</NavLink></div>
                            :
                            <div className='mt-3 font-bold'>Do have account? <NavLink to={LOGIN_ROUTE} className='hover:underline hover:text-indigo-600'>Log in!</NavLink></div>
                        }
                        
                        <button className='button_auth pr-1' onClick={auth}>{isLogin ? 'Log in' : 'Register'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Auth;