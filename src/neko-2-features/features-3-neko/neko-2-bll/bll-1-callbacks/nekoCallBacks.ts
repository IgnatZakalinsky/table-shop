import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {IBooleanActions} from "../../../features-4-common/common-1-boolean-reducer/booleanActions";
import {setCookie} from "../../../features-2-helpers/helpers-1-authorization/cookies";
import {INekoActions, nekoSetName} from "../bll-2-redux/nekoActions";
import {nekoClear} from "./nekoBooleanCallbacks";

type ExtraArgument = {};

export const logoutCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions | INekoActions>,
) => () => {
        setCookie('token', '', -1000);
        dispatch(nekoSetName(''));
        nekoClear(dispatch);
};
