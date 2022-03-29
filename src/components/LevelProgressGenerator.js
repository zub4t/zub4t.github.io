/**
 * How document components in React
 * Top-Level guide for react:
 * https://reactjs.org/docs/react-api.html#createelement
 */
import React from 'react'
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function LevelProgressGenerator(props){
    const aptness = [
            dictionary.beginner, 
            dictionary.basic, 
            dictionary.intermediate, 
            dictionary.advanced, 
            dictionary.expert
        ]
    const level = props.level;
    return(
        <div className="LevelProgressGenerator">
            <div className="imgCarril">
            {
                /**
                 * @Possible_Enhance
                 * It can use a new component called <DotsCarril />
                 * in order to group the _.map()_ method
                 */
                aptness.map((element, index)=>{
                    return (
                        (level-1 >= index) ?
                            React.createElement(
                                'img',
                                {
                                    'src':'../statics/blue-dark-dot.svg',
                                    'width': '12',
                                    'height': '12'
                                }
                                ,
                                null
                            )
                        :
                            React.createElement(
                                'img',
                                {
                                    'src':'../statics/gray-dot.svg',
                                    'width': '12',
                                    'height': '12'
                                }
                                ,
                                null
                            )
                    )
                })
            }
            </div>
            <p>{aptness[level-1]}</p>
        </div>
    )
}

export default LevelProgressGenerator;

