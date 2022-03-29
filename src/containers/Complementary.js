import React, { Component } from "react";

class Complementary extends Component{
    render(){
        return(
            <div className="Complementary mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                <div class="Complementary-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Complementary;