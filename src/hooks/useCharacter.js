import { useEffect, useState } from "react";


export const useCharacter = () => {
    const [characters, setcharacters] = useState([]);
    const url="https://rickandmortyapi.com/api/character"
    const getCharacters = async () => {


        const response = await fetch(url)
        const data = await response.json()
    
        setcharacters(data.results);
        console.log(data);
    }



}

useEffect(() => {
    getCharacters()

}, []);

return{ characters }