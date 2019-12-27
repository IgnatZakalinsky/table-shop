import React, {useState} from 'react';

interface IPaginationProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const Pagination: React.FC<IPaginationProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    const [selectedItems, selectItems] = useState(7);
    const [selectedPage, selectPage] = useState(1);

    const pageTotalCount = 2;
    const pages = [];
    for (let i = 0; i < pageTotalCount; i++) pages.push((
        <button
            style={{background: selectedPage === i + 1 ? 'lime' : undefined}}
            onClick={() => selectPage(i + 1)}
        >
            {i + 1}
        </button>
    ));

    return (
        <div
            style={{
                margin: '0 10px',
                minHeight: '50px',
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            Pagination

            <select value={selectedItems} onChange={e => selectItems(Number(e.currentTarget.value))}>
                <option value={4}>4</option>
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            {pages}
        </div>
    );
};

export default Pagination;
