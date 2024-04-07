import { FunctionComponent } from "preact";
import { Pokemon } from "../type.ts";
import { useEffect, useState } from "preact/hooks";

const PokemonL: FunctionComponent = () => {
  const [pokemonL, setPokemonL] = useState<Pokemon[]>([])
  useEffect(() => {
    const fpokeL = async () => {
      const response = await fetch("/api/API", {
        method: "GET"
      });
      const pL = await response.json();
      setPokemonL(pL)
    }
    fpokeL()
  }, [])

  return (
    <div class="flex-row ">
      {pokemonL.map((pokemon) => (
        <a class="characterContainer" href={`/pokemon/${pokemon.name}`}>
          <h2 class="text-overflow">{pokemon.name}</h2>
          <img class="img-m half-rounded" src={pokemon.image} alt={pokemon.name}/>
          <audio class = "centro audio" controls>
            <source src={pokemon.sound} type="audio/mpeg"/>
          </audio>
        </a>
      ))}
    </div>
  );
};

export default PokemonL;