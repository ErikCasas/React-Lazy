import "../styles/ListPokemon.css";
import { useEffect, useState } from "react";
import {getAllPokemons} from '../JavaScript/data.js'
import Card from "../components/Card";
const ListPokemons = () => {

  const [data, setData]= useState([])

  useEffect(() => {
    getAllPokemons().then(res =>setData(res))
  }, []);

  return (
    <>
      <div className="card-list-pokemon">
        {
          data.map(el=>(
            <Card key={el.id} data={el}/>
          ))
        }
      </div>
    </>
  );
};

export default ListPokemons;
