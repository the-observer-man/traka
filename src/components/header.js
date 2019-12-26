import React, { Component } from 'react';

class Header extends Component {
  state = { 
    title: "Traka"
   }
  render() { 
    return ( <div>{this.state.title}</div> );
  }
}
 
export default Header;