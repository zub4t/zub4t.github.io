import React, {Component} from 'react';
import Subtitle from '../components/Subtitle';

class TopicSection extends Component{
    render(){
        return (
            <div>
                <Subtitle 
                    text={this.props.title}
                />
                <hr/>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default TopicSection;