import {tableInitialState} from "./tableInitialState";
import {ITableActions, TABLE_SET_TABLE} from "./tableActions";

export const tableReducer = (state = tableInitialState, action: ITableActions) => {
    switch (action.type) {
        case TABLE_SET_TABLE: {
            return {
                ...state,
                [action.table]: action.items,
            }
        }

        default: {
            return state;
        }
    }
};
