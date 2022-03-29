import React from "react";
import ListItem from './ListItem';

function SectionUnorderedList(props){
    return (
        <div className="SectionUnorderedList">
            <ul>
                {
                    props.contents.map(content =>{
                        return (
                            <li>
                                <ListItem text={content}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SectionUnorderedList;