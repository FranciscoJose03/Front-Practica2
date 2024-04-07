// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_API from "./routes/api/API.tsx";
import * as $api_name_ from "./routes/api/[name].tsx";
import * as $buscarpokemon from "./routes/buscarpokemon.tsx";
import * as $createpokemon from "./routes/createpokemon.tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $BPokemon from "./islands/BPokemon.tsx";
import * as $Botones from "./islands/Botones.tsx";
import * as $PokemonL from "./islands/PokemonL.tsx";
import * as $UnPokemon from "./islands/UnPokemon.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/API.tsx": $api_API,
    "./routes/api/[name].tsx": $api_name_,
    "./routes/buscarpokemon.tsx": $buscarpokemon,
    "./routes/createpokemon.tsx": $createpokemon,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/BPokemon.tsx": $BPokemon,
    "./islands/Botones.tsx": $Botones,
    "./islands/PokemonL.tsx": $PokemonL,
    "./islands/UnPokemon.tsx": $UnPokemon,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
