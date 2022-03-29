import React, {Component} from 'react';

class Body extends Component{
    render(){
        return(
            <div className="Body mdc-layout-grid__cell--span-12">
                <div class="mdc-layout-grid__inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Body;