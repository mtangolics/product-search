import React from 'react';

const SearchResults = (props) => {

    const type_map = {
        'CREDIT_CARD': 'Credit Card',
        'BANK': 'Bank',
        'LOAN': 'Loan',
        'MORTGAGE': 'Mortgage',
        'INVESTMENT': 'Investment'
    };

    const formatNameDiv = (name) => {
        const index = name.toLowerCase().indexOf(props.input.toLowerCase());

        const start = name.slice(0,index);
        const match = name.slice(index, index + props.input.length);
        const end = name.slice(index + props.input.length);

        return (
            <div className="resultName">
                {start}<span>{match}</span>{end}
            </div>
        );
    };

    const resultList = props.results && props.results.length > 0 ? props.results.map((r,i) => {
            return (
                <li className={props.curSelection === i ? 'selected' : undefined} onClick={() => props.selectionHandler(r)} key={i} >
                    {formatNameDiv(r.name)}
                    <div className="resultInfo">
                        {type_map[r.type]}
                    </div>
                </li>
            );
        }
    ) : [];

    return (
        <div className="resultsContainer">
            <ul>
                {resultList}
            </ul>
        </div>
    )
}

export default SearchResults;
