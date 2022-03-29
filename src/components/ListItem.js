import React from 'react';
import TextLayout from './TextLayout';

function ListItem(props){
    return(
        <li>
            <TextLayout text={props.text} />
        </li>
    )
}

export default ListItem;