import React, {useState} from 'react';
import PriceRange from "./PriceRange";

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
            <button>Search</button>
        </div>
    );
};

export default Search;
