import {ITables} from "./tableInitialState";

export const TABLE_LOADING = 'TABLE/LOADING';
export const TABLE_ERROR = 'TABLE/ERROR';
export const TABLE_SUCCESS = 'TABLE/SUCCESS';

export const TABLE_ACTION_NAMES = [TABLE_LOADING, TABLE_ERROR, TABLE_SUCCESS];

export const TABLE_SET_TABLE = 'TABLE/SET_TABLE';
export const TABLE_ADD_ITEM = 'TABLE/ADD_ITEM';
export const TABLE_DELETE_ITEM = 'TABLE/DELETE_ITEM';
export const TABLE_UPDATE_ITEM = 'TABLE/UPDATE_ITEM';

interface ISetTable {
    type: typeof TABLE_SET_TABLE;
    table: ITables;
    items: any;
}
interface IAddItem {
    type: typeof TABLE_ADD_ITEM;
    table: ITables;
    item: any;
}
interface IDeleteItem {
    type: typeof TABLE_DELETE_ITEM;
    table: ITables;
    item: any;
}
interface IUpdateItem {
    type: typeof TABLE_UPDATE_ITEM;
    table: ITables;
    item: any;
}

export type ITableActions = ISetTable | IAddItem | IDeleteItem | IUpdateItem;

export const setTable = (table: ITables, items: any): ISetTable => ({
    type: TABLE_SET_TABLE,
    table,
    items,
});
