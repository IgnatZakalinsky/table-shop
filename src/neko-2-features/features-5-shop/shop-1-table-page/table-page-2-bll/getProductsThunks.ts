import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {ITableActions, setTable} from "../../../features-4-common/common-5-table/table-1-table/table-2-bll/bll-2-redux/tableActions";
import {ShopAPI} from "../table-page-3-dal/ShopAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getProducts = (): ThunkAction<Return, IAppStore, ExtraArgument, ITableActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ITableActions>, getStore: IGetStore) => {

        // nekoLoading(dispatch, true);

        try {
            const data = await ShopAPI.getProducts();
            if (data.error) {
                // nekoError(dispatch, data.error);

                console.log('Shop Get Products Error!', data.error);
            } else {

                dispatch(setTable('shop', data.products));
                // nekoSuccess(dispatch, true);

                console.log('Neko Get Products Success!', data)
            }
        } catch (e) {
            // nekoError(dispatch, e.message);

            console.log('Neko Get Products Error!', e)
        }
    };
