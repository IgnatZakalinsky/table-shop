import axios from 'axios';
import {baseURL} from "../../../../base-url";
import {IShopTable} from "../../../features-4-common/common-5-table/table-1-table/table-2-bll/bll-2-redux/tableInitialState";

const instance = axios.create({
    baseURL
});

export interface IGetProducts {
    products: IShopTable[];

    error: string;
}

export const ShopAPI = {
    getProducts: async () => {
        const response = await instance.get<IGetProducts>('/shop?sortProducts=PRICE_UP&page=2&pageCount=7');
        return response.data;
    },
    addProduct: async (productName: string, price: number) => {
        const response = await instance.post<IGetProducts>('/shop', {product: {productName, price}});
        return response.data;
    },
    updateProduct: async (id: string) => {
        const response = await instance.put<IGetProducts>(
            '/shop',
            {product: {productName: 'newCar2', price: 9000, id}}
            );
        return response.data;
    },
    deleteProduct: async (id: string) => {
        const response = await instance.delete<IGetProducts>(
            `/shop?id=${id}`
        );
        return response.data;
    },

};
