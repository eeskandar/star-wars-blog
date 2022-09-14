import React, { useEffect, useState } from "react"
import { Card } from "./Card.jsx"


export const Planets = ()=> {
    const API_URL_PLANETS= "https://www.swapi.tech/api/planets"
    const [planets, setPlanets] = useState([])

    async function getPlanets () {
		const response = await fetch(API_URL_PLANETS)
		if (!response.ok) {
			new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setPlanets(body.results)
	}

    const PlanetsMapping = planets.map((planet, i) => {
        return (
            <Card key={i} name={planet.name} styles="img-sizing" type="planets" uid={planet.uid} url={`planets/${planet.uid}`}/>
        )
    })

    useEffect (()=>{getPlanets()}, [])

    return (
        <div className="mt-5 pb-5">
            <h1 className="ms-5 text-danger">Planets</h1>
            <div className="d-flex mt-3 scroll-lat">
                {PlanetsMapping}
            </div>
        </div>
    )
}