import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";
import './CollectionPage.scss'

const CollectionPage = ({collection}) => {
    const {title, items} = collection

    return (
        <div className='collection-page'>
            <h1>collection page</h1>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (<CollectionItem key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

export default CollectionPage
