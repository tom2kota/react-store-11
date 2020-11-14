import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import './CollectionsOverview.scss';

 const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        <h1>collection overview</h1>

        {collections.map(
            ({id, ...otherCollectionProps}) =>
                <CollectionPreview
                    key={id}
                    {...otherCollectionProps}
                />
        )}

    </div>
)

export default CollectionsOverview
