export interface IShopTable {
    id: string;
    productName: string;
    price: number;
}

export interface ITableState {
    shop: IShopTable[];

}

export type ITables = 'shop';

export const tableInitialState: ITableState = {
    shop: [
        {
            id: '0,234535325',
            productName: 'Tesla Cybertruck',
            price: 40000,
        },
        {
            id: '0,234535326',
            productName: 'Tesla X',
            price: 35000,
        },

    ],
};
