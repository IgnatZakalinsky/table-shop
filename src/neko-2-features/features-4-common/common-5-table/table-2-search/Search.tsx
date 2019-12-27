import React, {useState} from 'react';
import PriceRange from "./PriceRange";
import {useDispatch} from "react-redux";
import {getProducts} from "../../../features-5-shop/shop-1-table-page/table-page-2-bll/getProductsThunks";

export interface ISearchModel {

}

interface ISearchProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const Search: React.FC<ISearchProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    const dispatch = useDispatch();
    const search = () => dispatch(getProducts());

    return (
        <div
            style={{
                margin: '0 10px',
                minHeight: '100px',
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            Search
            <input placeholder={'product name'}/>
            {/*<input type={'range'} min={3000} max={9000} list={'il'} step={1000} multiple={true}/>*/}
            {/*<datalist id={'il'}>*/}
                {/*<option value={'0'} label={'3000'}/>*/}
                {/*<option value={'50'} label={'6000'}/>*/}
                {/*<option value={'100'} label={'9000'}/>*/}
            {/*</datalist>*/}
            <PriceRange/>
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
