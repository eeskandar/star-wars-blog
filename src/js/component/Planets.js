import React, { useEffect, useState } from "react"
import { Card } from "./Card"


export const Planets = ()=> {
    const API_URL= "https://www.swapi.tech/api/"
    const [planets, setPlanets] = useState([])

    async function getPlanets () {
		const response = await fetch(API_URL + "planets")
		if (!response.ok) {
			new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setPlanets(body.results)
	}

    const PlanetsMapping = planets.map((planet, i) => {
        return (
            <Card key={i} name={planet.name} url={`planets/${planet.uid}`}/>
        )
    })

    useEffect (()=>{getPlanets()}, [])

    return (
        <div className="mt-5 pb-5">
            <h1 className="ms-5">Planets</h1>
            <div className="d-flex mt-3 scroll-lat">
                {PlanetsMapping}
            </div>
        </div>
    )
}