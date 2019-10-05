import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link to='/'><span id='homeHeader'>Home</span></Link>
                <Link to={`/${this.props.match.params.user}/catalog`}><span id='catalogHeader'>Catalog</span></Link>
                
                <span id="logo">NETFLIX</span>
            </div>
        )
    }
}
export default Header;
