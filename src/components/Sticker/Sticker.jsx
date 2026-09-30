import { Component } from "react";
import {Item} from "./Sticker.styled"
class Sticker extends Component{
    render(){
        const {label,img,onName}=this.props
        return <Item data-label={label}>
            <img onClick={()=>onName(label)} src={img} alt={label} />
        </Item>
    }
}
export default Sticker