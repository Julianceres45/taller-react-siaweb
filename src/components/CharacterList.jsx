import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"


   


export default function CharacterList() {
    const [characters, setcharacters] = useState([]);
    const url="https://rickandmortyapi.com/api/character"

const getCharacters = async () => {


    const response = await fetch(url)
    const data = await response.json()

    setcharacters(data.results);
    console.log(data);

  
}

useEffect(() => {
    getCharacters()

}, []);
   
  return (
    <div className="grid grid-cols-4 gap-10">
    
       {

        characters.map((character, index)=>
            <CharacterCard key={index} character={character}/>
        )

       }

    </div>
  )
}
