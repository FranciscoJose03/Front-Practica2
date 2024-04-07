import { FunctionComponent } from "preact";
import { Pokemon } from "../type.ts";
import { useState } from "preact/hooks";
import {JSX} from "preact";
import {BVolver} from "../islands/Botones.tsx";

const BPokemon: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [name, setName] = useState("")
  
  const buscar = async (e: JSX.TargetedEvent<HTMLFormElement, Event>, name: string) => {
    e.preventDefault();  
    const response = await fetch(`/api/${name}`, {
        method: "GET"
      });
      const pK = await response.json();
      setPokemon(pK)
  }
    
  return (
    <section>
      <div class="mainTitle">
        <h1>Buscar Pokemones</h1>    
    <form method={"GET"} onSubmit={(e) => buscar(e, name)}>
      <div class = "form">
          <p>Introduce el nombre</p>
        <input type="text" value={name} name = "name" placeholder="Name" onInput={(e) => setName(e.currentTarget.value)}/>
        <button type={"submit"}>Buscar</button>
      </div>
      <BVolver/> 
    </form>
    </div>
    <div class="flex-row">
      {pokemon.map((pokemon) => (
        <a class="characterContainer" href={`/pokemon/${pokemon.name}`}>
          <h2 class="text-overflow">{pokemon.name}</h2>
          <img class="img-m half-rounded" src={pokemon.image} alt={pokemon.name}/>
          <audio class = "centro audio" controls>
            <source src={pokemon.sound} type="audio/mpeg"/>
          </audio>
        </a>
      ))}
    </div>
    </section>
  );
};

export default BPokemon;