import React from "react";
import {withRouter} from 'react-router-dom';
import CollectionItemContainer from "../collection-item/CollectionItemContainer";
import './CollectionPreview.scss';

const CollectionPreview = ({title, items, history, match}) => (
    <div className='collection-preview'>
        <h1>collection preview</h1>
        <h1 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 3)
                .map((item) =>
                    <CollectionItemContainer key={item.id} item={item}/>
                )}
        </div>
    </div>
)

export default withRouter(CollectionPreview)
