import {tableInitialState} from "./tableInitialState";

export const tableReducer = (state = tableInitialState, action: any) => {
    switch (action.type) {
        // case NEKO_SET_NAME: {
        //     return {
        //         ...state,
        //         name: action.name,
        //     }
        // }

        default: {
            return state;
        }
    }
};
