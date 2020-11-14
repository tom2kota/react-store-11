import React from "react";
import MenuItem from "../menu-item/MenuItem"
import DIRECTORY_DATA from "./directoryData";
import './Directory.scss'

const Directory = () => (
    <div className='directory-menu'>
        {DIRECTORY_DATA.map(
            ({id, ...restProps}) => <MenuItem key={id} {...restProps} />
        )}
    </div>
)

export default Directory
