import React from 'react';
import data from '../data/data';
import './style/tags.css';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
        <div >
            <ul className='Cards'>
            {data.map((obj,index)=>{
                console.log(obj,this.props.value);
                if(obj===this.props.value){
                    
                    return <li key={index} className='Indiv_Cards red' onClick={()=>this.props.activeTag(obj)}>{obj}</li>
                }
                else{
                   return <li key={index} className='Indiv_Cards' onClick={()=>this.props.activeTag(obj)}>{obj}</li>
                }
               
            }
            
            )}
            </ul>
            
        </div>
         </>
        )
    }
}
 
export default Tags;