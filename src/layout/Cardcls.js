import { Component } from "react";
class Cardcls extends Component{
render(){
return (
    <>
    <div className="container ">
    <div className="card my-4">
        <img src ={this.props.image}/>
        
    <div className="card-body">
        <h3>{this.props.title}</h3>
        <p>{this.props.content ?? "dummy content"}</p>
        <button className="btn btn-success " >Click</button>
    </div>
    </div>
    
    </div>
    </>
)
    }
}
export default Cardcls