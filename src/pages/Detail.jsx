import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import { useEffect, useState } from "react";
import { getPokemonById } from "../JavaScript/data";
const Detail = () => {


  const { idPokemon } = useParams();

  const [data, setData] = useState();

  useEffect(() => {

      getPokemonById(idPokemon).then((res) => setData(res));
  }, [idPokemon]);


  if (!data) {

    return (
      <>
        <div className="info-pokemon">
          <h1>Cargando...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container-pokemon">
        <div className="info-pokemon">
          <h1>Te presento a {data.name}</h1>
          <img src={data.image} />
          <p>su tipo es {data.type}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
