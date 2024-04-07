import {Pokemon} from "../type.ts";
import { PageProps } from "$fresh/server.ts";
import AddForm from "../islands/AddForm.tsx";
import {BVolver} from "../islands/Botones.tsx";
const Page = (props: PageProps<Pokemon[]>) => {
  return (
    <div class = "flex-column">
      <div class = "mainTitle">
        <h1>Creador de Pokemones</h1>
        <BVolver/>
      </div>
      <AddForm/>
    </div>
  );
}
export default Page;