import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import './CollectionItem.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item

    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add 2 Cart</CustomButton>
        </div>
    )
}

export default CollectionItem
