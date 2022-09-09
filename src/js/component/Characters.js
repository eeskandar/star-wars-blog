import React, { useEffect, useState } from "react"
import { Card } from "./Card"


export const Characters = ()=> {
    const API_URL= "https://www.swapi.tech/api/"
    const [characters, setCharacters] = useState([])

    async function getCharacters () {
		const response = await fetch(API_URL + "people")
		if (!response.ok) {
			new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setCharacters(body.results)
	}

    const CharMapping = characters.map((char, i) => {
            return (
                <Card key={i} name={char.name} url={`people/${char.uid}`}/>
            )
        })

    useEffect (()=>{getCharacters()}, [])

    return (
        <div>
            <h1 className="ms-5 text-danger">Characters</h1>
            <div className="d-flex mt-3 scroll-lat">
                {CharMapping}
            </div>
        </div>
    )
}