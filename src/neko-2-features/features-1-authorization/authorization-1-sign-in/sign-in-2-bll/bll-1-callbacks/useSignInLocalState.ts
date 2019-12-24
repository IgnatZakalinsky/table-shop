import {useState} from "react";
import {Dispatch} from "redux";
import {signInClear} from "./signInBooleanCallbacks";

export const useSignInLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [rememberMe, setRememberMe] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        signInClear(dispatch);
    };
    const setPasswordCallback = (passwordC: string) => {
        setPassword(passwordC);
        signInClear(dispatch);
    };
    const setRememberMeCallback = (rememberMeC: boolean) => {
        setRememberMe(rememberMeC);
        signInClear(dispatch);
    };

    return {
        email,
        password,
        rememberMe,
        setEmailCallback,
        setPasswordCallback,
        setRememberMeCallback,

        redirect,
        setRedirect,
    }
};
