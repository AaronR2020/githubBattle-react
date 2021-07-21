import React,{Component} from 'react';
import './style/ui.css'

class UI extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let iteratableVal=Array.from(this.props.value);
        return ( 
            <div className='UI_All_Cards'>
                
                {
                iteratableVal.map((obj,index)=>(
                   
                   <>
                   {console.log(obj)}
                   <div className='UI_Card'>
                        {console.log(obj)}
                        <h2>#{index}</h2>
                        <img src={obj.owner.avatar_url} width='40px'/>
                        <h3>{obj.owner.login}</h3>
                        <p>{obj.forks} Forks</p>
                        <p>{obj.stargazers_count} Stars</p>
                        <p>{obj.open_issues_count} Issues</p>
                    </div>
                   </>
                    
                ))}
            
            </div>
            );
    }
}
 
export default UI ;