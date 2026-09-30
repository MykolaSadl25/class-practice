import { Component } from "react";
import stickers from "./stickers.json"
import StickersList from "./components/StickersList/StickersList";
import Choice from "./components/Choice/Choice";
class App extends Component{
  state={
    stickers,
    pokemonName:"",
  }
  handleClick = (text)=>{
this.setState({
  pokemonName:text,
})
  }
  render(){
    return(
      <>
      <StickersList stickers={this.state.stickers} onName={this.handleClick}/>
      <Choice name={this.state.pokemonName}/>
      </>
    )
  }
}
export default App