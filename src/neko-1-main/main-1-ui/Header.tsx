import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    FORGOT_PATH,
    NEKO_PATH,
    REGISTER_PATH,
    SIGN_IN_PATH,
    TEST_MODALS_PATH,
    TEST_TIME_PATH,
    TEST_COLOR_PATH, SHOP_TABLE_PATH
} from './Routes';

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
            }}
        >
            <button onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</button>

            {show && <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>}
            {show && <NavLink to={REGISTER_PATH}>register</NavLink>}
            {show && <NavLink to={FORGOT_PATH}>forgot</NavLink>}

            {show && <NavLink to={NEKO_PATH}>neko</NavLink>}

            {show && <NavLink to={TEST_MODALS_PATH}>modals</NavLink>}
            {show && <NavLink to={TEST_TIME_PATH}>time</NavLink>}
            {show && <NavLink to={TEST_COLOR_PATH}>color</NavLink>}

            {show && <NavLink to={SHOP_TABLE_PATH}>shopTable</NavLink>}


        </div>
    );
};

export default Header;
