import React, {Component} from 'react'

class Principal extends Component{
    render(){
        return(
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                <div class="mdc-layout-grid__inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Principal;