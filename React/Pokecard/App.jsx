/*Create a component called RandomPokemon
Generate a random number from 1 -151
Display an h1 with the random pokemon number
Render the corresponding image, using the random number to generate the URL
Style the component such that: 
    The parent element has a border
    The image is 150px wide
    The h1 is blue*/

import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";
import Die from "./Die";
import DiceRoll from "./DiceRoll";
import RandomPokemon from "./RandomPokemon";

export default function App() {
    return (
        <div className="App">
            {/* <DiceRoll/>
      <DiceRoll/> */}
            <RandomPokemon />
        </div>
    );
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
