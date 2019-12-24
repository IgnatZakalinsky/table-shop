import axios from 'axios';
import {baseURL} from "../../../../base-url";
import {IShopTable} from "../../../features-4-common/common-5-table/table-2-bll/bll-2-redux/tableInitialState";

const instance = axios.create({
    baseURL
});

export interface IGetProducts {
    products: IShopTable[];

    error: string;
}

export const ShopAPI = {
    getProducts: async () => {
        const response = await instance.get<IGetProducts>('/shop');
        return response.data;
    },
    addProduct: async () => {
        const response = await instance.post<IGetProducts>('/shop', {product: {productName: 'newCar', price: 7000}});
        return response.data;
    },

};
