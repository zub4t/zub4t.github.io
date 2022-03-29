import React, {Component} from 'react';
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Location from '../components/Location'

class Header extends Component{
    render(){
        const location = `${this.props.location.city}, ${this.props.location.country}`;

        return (
            <div className="Header mdc-layout-grid__cell--span-12">
                <div class="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell--span-9">
                        <Title text= {this.props.name}/>
                        <Subtitle text= {this.props.profession}/>
                    </div>
                    <div className="mdc-layout-grid__cell--span-3">
                        <Location location= {location}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;