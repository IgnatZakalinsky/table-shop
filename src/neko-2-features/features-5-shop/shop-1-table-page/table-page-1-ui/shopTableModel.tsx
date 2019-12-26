import React from 'react';
import {ITableModel} from "../../../features-4-common/common-5-table/table-1-ui/Table";

export const shopTableModel = (
    add: () => void,
    update: (id: string) => void,
    deleteP: (id: string) => void,


): ITableModel[] => {
    return [
        {
            title: (i: number) => (<div key={i} style={{width: '60%'}}>product</div>),
            render: (d: any, i: number) => (<div key={i} style={{width: '60%'}}>{d.productName}</div>)
        },
        {
            title: (i: number) => (<div key={i} style={{width: '25%'}}>price</div>),
            render: (d: any, i: number) => (<div key={i} style={{width: '25%'}}>{d.price}</div>)
        },
        {
            title: (i: number) => (<div key={i} style={{width: '15%'}}>
                <button onClick={add}>add</button>
            </div>),
            render: (d: any, i: number) => (<div key={i} style={{width: '15%'}}>
                <button onClick={() => deleteP(d.id)}>delete</button>
                <button onClick={() => update(d.id)}>update</button>
            </div>)
        },

    ];
};
