import React from "react";
import CollectionItemContainer from "../../components/collection-item/CollectionItemContainer";
import './CollectionPage.scss'

const CollectionPage = ({collection}) => {
    const {title, items} = collection

    return (
        <div className='collection-page'>
            <h1>collection page</h1>
            <h2 className='title'>{title}</h2>
            <div className='items'>

                {items.map(item =>
                    <CollectionItemContainer key={item.id} item={item}/>
                )}

            </div>
        </div>
    )
}

export default CollectionPage
