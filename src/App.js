import './App.css';
import React from 'react'

import Nav from './components/Nav'
import Tags from './components/Tags'
import UI from './components/UI'
import Info from './components/Info.js'
import Calculate from './components/Calculate.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      popular:true,
      lightMode:true,
      activeTag:'All',
      val:null,
     }
  }
  //==================================
  changePopularT=()=>{
    this.setState({
      popular:true,
    })
  }
  changePopularF=()=>{
    this.setState({
      popular:false,
    })

  }

  changeMode=()=>{
    this.setState({
      lightMode:!this.state.lightMode,
    })
  }
componentDidMount(){
  console.log('mounted');
  fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.items)
    this.setState({ 
      val: data.items,
      activeTag:'All' })
    }
      
      );
}


  active=(tag)=>{
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ 
        val: data.items,
        activeTag:tag }));
  }
  //==================================
  render() { 
    console.log('render i',this.state);
    if (!this.state.val) {
      return <>
      <div class="bouncing-loader">
  <div></div>
  <div></div>
  <div></div>
</div>
      </>
    }
    if(this.state.popular===true){
      return ( 
        <>
        <Nav  popularF={this.changePopularF}
              popularT={this.changePopularT}
              mode={this.changeMode}
              modeVal={this.state.lightMode}
              popular={this.state.popular}
        />
    
        <Tags activeTag={this.active} value={this.state.activeTag}/>
    
        <UI tagValue={this.state.activeTag} value={this.state.val}/>
        </> );
      }
      else{
        return(
        <> <Nav  popularF={this.changePopularF}
        popularT={this.changePopularT}
        mode={this.changeMode}
        modeVal={this.state.lightMode}
            />
        <Info/>
        <Calculate/>
        
        
  
  
         </>
        )
      }
    }
  }

  



export default App;
