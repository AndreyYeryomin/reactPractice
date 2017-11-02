import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log(this.props.items);
        return (
            <div>
                {this.props.items.map((item,index)=>
                    <a key={index} href={item.link}>{item.label}</a>
                )}
            </div>);
    }
}
export default Header;