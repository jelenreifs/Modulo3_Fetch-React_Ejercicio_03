import { useState, useEffect } from "react";

/* const Pokemon = (props) => { */
const Pokemon = ({url}) => { 
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPokemon(res.pokemon);
      
      });
/*   }, [props.url]); */
  }, [url]);

  return (
    <div>
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p> 
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p>
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p>
    </div>
  ) 
 
}


function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then(res => res.json())
      .then(res => {
        setData(res.results)
      });
  }, []);



   const mostrarTipo = data.map((tipo,index) => 
    // <option key={index+1} value={index+1}>{tipo.name}</option>
    <option key={index} value={tipo.url}>{tipo.name}</option>
  ) 

    const handleChange = (e) => { 
    setUrl(e.target.value)
  }

 
  return (
    <>
      <select onChange={handleChange}>{mostrarTipo}</select>
      <Pokemon url={url} />
    </>
  ); 
}

export default App;
