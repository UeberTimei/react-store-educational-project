import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { check, logout } from '../http/userAPI';
import { ADMIN_ROUTE, BASKET_ROUTE, HELP_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavbarMenu = observer(({show, onHide}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        logout()
        user.setIsAuth(false)
        user.setUser({})
        navigate(SHOP_ROUTE)
    }

    if((window.innerWidth < 1024) && !show){
        return null
    }

    return (
        <div>
            {user.isAuth ?
                    <div>
                        <ul className='md:ml-auto md:p-4 mt-2 md:mt-0 flex-col md:flex-row flex md:flex justify-end space-y-2 md:space-y-0'>
                            <li onClick={onHide}><button className='button' onClick={() => navigate(HELP_ROUTE)}>Помощь</button></li>
                            <li onClick={onHide}><button className='button' onClick={() => navigate(BASKET_ROUTE)}>Корзина</button></li>
                            {user.user.role === "ADMIN" ? <li onClick={onHide}><button className='button' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button></li> : <></>}
                            <li onClick={onHide}><button className='button' onClick={() => logOut()}>Выйти</button></li>
                        </ul>
                    </div>
                    :
                    <div>
                        <ul className='md:ml-auto md:p-4 mt-2 md:mt-0 flex-col md:flex-row flex md:flex justify-end space-y-2 md:space-y-0'>
                            <li onClick={onHide}><button className='button' onClick={() => navigate(HELP_ROUTE)}>Помощь</button></li>
                            <li onClick={onHide}><button className='button ml-auto' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button></li>
                        </ul>
                    </div>
                }
        </div>
    );
});

export default NavbarMenu;