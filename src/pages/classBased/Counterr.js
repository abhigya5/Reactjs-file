// import { render } from "@testing-library/react";
import { Component } from "react";
class counterr extends Component{
    constructor(){
        super()
        //initialization..
        this.state={
            count:0
        }}
    inc =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    dec =()=>{
        const counterr=this.state.count;
        this.setState({
            count:counterr>0?counterr-1:counterr
        })
    }
    render(){
        return (
            <>
            <div className="col-4 mt-5 my-5 mx-auto shadow p-5 mx-5 bg-dark text-white rounded-pill" >
            <h1>{this.state.count}</h1>
                <button onClick={this.inc} className="btn btn-success mx-5">+</button>
                <button onClick={this.dec} className="btn btn-danger mx-5">-</button>
            </div>
            </>
        )}
}
export default counterr