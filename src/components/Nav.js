import React from 'react';
import './style/nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <nav>
            <div className='left_nav'>
                <ul>
                <li className={this.props.popular&&'red'||'white'}  onClick={this.props.popularT}>Popular</li>
                <li className={!this.props.popular&&'red'||'white'}  onClick={this.props.popularF}>Battle</li>
                </ul>
            </div>
            {this.props.modeVal===true?<i onClick={this.props.mode} class="far on fa-lightbulb"></i>:<i onClick={this.props.mode} class="fas off fa-lightbulb"></i>}
        </nav>)
        
}}
 
export default Nav;