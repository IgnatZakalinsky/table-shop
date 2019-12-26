import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {ITableActions} from "../../../features-4-common/common-5-table/table-1-table/table-2-bll/bll-2-redux/tableActions";
import {ShopAPI} from "../table-page-3-dal/ShopAPI";
import {getProducts} from "./getProductsThunks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const updateProduct = (id: string): ThunkAction<Return, IAppStore, ExtraArgument, ITableActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ITableActions>, getStore: IGetStore) => {

        // nekoLoading(dispatch, true);

        try {
            const data = await ShopAPI.updateProduct(id);
            if (data.error) {
                // nekoError(dispatch, data.error);

                console.log('Shop Update Product Error!', data.error);
            } else {

                // dispatch(setTable('shop', data.products));
                // nekoSuccess(dispatch, true);

                console.log('Neko Update Product Success!', data);
                dispatch(getProducts());
            }
        } catch (e) {
            // nekoError(dispatch, e.message);

            console.log('Neko Update Product Error!', e)
        }
    };
