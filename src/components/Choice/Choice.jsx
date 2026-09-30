import { Component } from "react";

class Choice extends Component{
    render(){
        return <p>{this.props.name||"Select a sticker"}</p>
    }
}
export default Choice