import PokemonL from "../islands/PokemonL.tsx"
import {Pokemon} from "../type.ts";
import { PageProps } from "$fresh/server.ts";
import {BCrear, BBuscar, BVolver} from "../islands/Botones.tsx";

const Page = (props: PageProps<Pokemon[]>) => {
  return (
    <body>
      <div class = "flex-column">
        <div class = "mainTitle">
        <h1 >Pokemones</h1>
        <BCrear/> <BBuscar/>
        </div>
        <PokemonL/>
      </div>
    </body>
  );
}
export default Page;