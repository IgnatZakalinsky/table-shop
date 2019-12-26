import React from 'react';
import ShopTableContainer from "./ShopTableContainer";
import Search from "../../../features-4-common/common-5-table/table-2-search/Search";
import Pagination from "../../../features-4-common/common-5-table/table-3-pagination/Pagination";

const TablePage: React.FC = () => {
    return (
        <>
            <Search/>
            <ShopTableContainer/>
            <Pagination/>
        </>
    );
};

export default TablePage;
