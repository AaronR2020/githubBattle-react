import {Component} from 'react'
import './style/calculate.css'
class Calculate extends Component {
    constructor(props) {
      super(props);
      this.state = {one:null,valueA: '',valuebB: '',objA:'',objB:'',sumA:0,sumB:0};  
    }
    handleChangeA=(event)=> {
        //user name
        this.setState({valueA: event.target.value});
      }
      
    handleChangeB=(event)=> {
        //user name
        this.setState({valueB: event.target.value});
      }
    
      handleSubmitA=(e)=>{
          e.preventDefault();

        fetch(`https://api.github.com/users/${this.state.valueA}`).then(res=>res.json()).then(data=>{
            
        let sumA=data.public_repos+data.followers*10+data.following*2;
        console.log(sumA,data.login);
        this.setState({
            objA:data,//save all data of user A
            sumA:sumA //save sumvalue of user A
        })

        })
    }
    handleSubmitB=(e)=>{
        e.preventDefault()
        fetch(`https://api.github.com/users/${this.state.valueB}`).then(res=>res.json()).then(data=>{
            let sumB=data.public_repos+data.followers*10+data.following*2;
        console.log(sumB,data.login);
            this.setState({
                objB:data,//save all data of user A\B
                sumB:sumB})
        })
    }
    calculateTotalValue=()=>{
        if(this.state.sumA>this.state.sumB){
           return this.setState({
                one:true,
            })
        }else{
           return this.setState({
                one:false,
            })
        }
    }
    render() {
        console.log(this.state.objA);
      return (
          <>
        <div className='Calc'>
        <form onSubmit={this.handleSubmitA}>
          <label>
            Name:
            <input type="text" onChange={this.handleChangeA} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmitB}>
          <label>
            Name:
            <input type="text" onChange={this.handleChangeB} />
          </label>
          <input type="submit" value="Submit" />
        </form>     
        </div>
        <div className='SubmitButton'>
        <button type="button" className='Submit' onClick={this.calculateTotalValue}>Calculate</button>   
        </div>
        <div className='TotalWinner'>
            {this.state.one==null?'':this.state.one==true?<p>{this.state.objA.login} is the winner</p>:<p>{this.state.objB.login} is the winner</p>}
        </div>
        </>
      );
    }
  }

 
export default Calculate;