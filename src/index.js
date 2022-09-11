import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{

// constructor(props){
//     super(props)
//     this.state = {lat : null , errorMessage:''}
// };
state = {lat : null , errorMessage:''}

componentDidMount(){
     window.navigator.geolocation.getCurrentPosition(
        position=>this.setState({lat:position.coords.latitude}),
        err=> this.setState({errorMessage:err.message})
     )
};

componentDidUpdate(){
    console.log('my component is just updated');
};

renderContent(){
    if(!this.state.lat && this.state.errorMessage){
        return <div>Error: {this.state.errorMessage}</div>
    }
  if(this.state.lat && !this.state.errorMessage){
        return <SeasonDisplay lat={this.state.lat} />
    }
   return <Spinner message="please accept the loaction " />
}

render(){
  return (
      <div className="border red"> 
      {this.renderContent()}
      </div>
  );
  };
  
}


ReactDOM.render(<App />,document.querySelector('#root'))

