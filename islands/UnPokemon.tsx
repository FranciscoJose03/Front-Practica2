import { FunctionComponent } from "preact";
import { Pokemon } from "../type.ts";
import { useEffect, useState } from "preact/hooks";
import { BVolver } from "./Botones.tsx";

type pokemon = {
    name: string;
}

const UnPokemon: FunctionComponent<pokemon> = (props) => {
  const {name} = props;

  const [show, setShow] = useState(false)
  const [creator, setCreador] = useState("")
  const [pokemonL, setPokemon] = useState<Pokemon[]>([])
  
  useEffect(() => {
    const pokem = async () => {
      const response = await fetch(`/api/${name}`, {
          method: "GET"
        });
        const pK = await response.json();
        setPokemon(pK)
    }
    pokem()
}, [])
  
  const deletePokemon = async () => {
    try {
      if(creator === ""){
        alert("Nombre del creador vacio")
      }
      const response = await fetch(`/api/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, creator})
      });
      if(response.status === 200){
        alert("Pokemon eliminado")
        window.location.href = "/";
      }else{
        response.json().then((data) => {
          alert(data.error)
        } )
      }
    } catch (e) {
      return new Response(JSON.stringify({error: e}), {
        status: 500
        }
      )
    }
  }

  return (
    <div>
    <div class="flex-around">
      {pokemonL.length > 0 &&
        <div>
          <div class = "mainTitle">
            <h1>{pokemonL[0].name}</h1>
            <BVolver/>
          </div>
          <img class = "centro img-max" src = {pokemonL[0].image}/>
          <audio class = "centro rounded" controls>
            <source  src={pokemonL[0].sound} type="audio/mpeg"/>
          </audio>
          
          <button class = "centro" onClick={() => setShow(true)}>Eliminar pokemon</button>
        </div>
      }
        
      </div>
      <div> 
      {show &&
        <section class = "modal">
          <div class = "modal_container">
            <h3 class = "modal_title">ELIMINAR POKEMON</h3>
            <p class = "modal_parograph">Añade el nombre del creador</p>
            <input type="text" value={creator} onInput={(e) => setCreador(e.currentTarget.value)}/>
            <button class = "modal_close" onClick={deletePokemon}>Confirmar</button>
            <button class = "modal_close" onClick={() => setShow(false)}>Cancelar</button>
          </div>
        </section>
        }
        </div>
    </div>
  );
};

export default UnPokemon;