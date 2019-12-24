import {ITables} from "./tableInitialState";

export const TABLE_LOADING = 'TABLE/LOADING';
export const TABLE_ERROR = 'TABLE/ERROR';
export const TABLE_SUCCESS = 'TABLE/SUCCESS';

export const TABLE_ACTION_NAMES = [TABLE_LOADING, TABLE_ERROR, TABLE_SUCCESS];

export const TABLE_SET_TABLE = 'TABLE/SET_TABLE';

interface ISetTable {
    type: typeof TABLE_SET_TABLE;
    table: ITables;
    items: any;
}

export type ITableActions = ISetTable;

export const setTable = (table: ITables, items: any): ISetTable => ({
    type: TABLE_SET_TABLE,
    table,
    items,
});
