import {Component} from 'react';
import'./style/info.css';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className='Info'>
            <h2 className='Center'>Instruction</h2>
            <div className='Info_Card'>

            <div className='Card_inner_info'>
                    <h3>Enter User Info</h3>
                    <i class="fas  info-fa fa-user-friends"></i>
                </div>

                <div className='Card_inner_info'>
                    <h3>Battle</h3>
                    <i class="fas info-fa fa-fighter-jet"></i>
                </div>

                <div className='Card_inner_info'>
                    <h3>See the Winner</h3>
                    <i class="fas info-fa fa-trophy"></i>
                </div>
            </div>
        </div> );
    }
}
 
export default Info;