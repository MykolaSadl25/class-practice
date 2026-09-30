import { Component } from "react";
import Sticker from "../Sticker/Sticker";
import { List } from "./StickerList.styled";
class StickersList extends Component{
    render(){
        const {stickers,onName} = this.props
        return <List>{stickers.map(({img,label})=>{
            return <Sticker key={label} label={label} img={img} onName={onName}/>
        })}</List>
    }
}
export default StickersList