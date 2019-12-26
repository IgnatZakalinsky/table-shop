import {tableInitialState} from "./tableInitialState";
import {ITableActions, TABLE_ADD_ITEM, TABLE_SET_TABLE, TABLE_DELETE_ITEM, TABLE_UPDATE_ITEM} from "./tableActions";

export const tableReducer = (state = tableInitialState, action: ITableActions) => {
    switch (action.type) {
        case TABLE_SET_TABLE: {
            return {
                ...state,
                [action.table]: action.items,
            }
        }
        case TABLE_ADD_ITEM: {
            return {
                ...state,
                [action.table]: [...state[action.table], action.item],
            }
        }
        case TABLE_DELETE_ITEM: {
            return {
                ...state,
                [action.table]: action.item,
            }
        }
        case TABLE_UPDATE_ITEM: {
            return {
                ...state,
                [action.table]: action.item,
            }
        }

        default: {
            return state;
        }
    }
};
