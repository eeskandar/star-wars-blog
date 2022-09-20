import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdditionalInfo } from "../component/AdditionalInfo.jsx";

export const SinglePlanet = ()=> {
    const API_URL= "https://www.swapi.tech/api/"
    const [singlePlanet, setSinglePlanet] = useState([])
    const params = useParams()
    
    async function getSinglePlanet (pid) {
        const response = await fetch(API_URL + `planets/${pid}`)
		if (!response.ok) {
            new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setSinglePlanet(body.result.properties)
	}

    useEffect(()=> getSinglePlanet(params.pid), [])

    return (
        <div>
            <div className="d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.pid}.jpg`} className="img-sizing-main m-3"
                alt="..." onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}/>
                <div className="mx-4 justify-content-center">
                    <h1 className="text-warning mt-3">{singlePlanet.name}</h1>
                    <p className="text-warning fs-5">Mucho texto referente a este pechocho planeta que, la verdad, tiene demasiado que ofrecer seguramente.</p>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mx-3 pt-4 border-top border-2 border-danger">
                <AdditionalInfo name="Name" data={singlePlanet.name}/>
                <AdditionalInfo name="Climate" data={singlePlanet.climate}/>
                <AdditionalInfo name="Population" data={singlePlanet.population}/>
                <AdditionalInfo name="Orbital Period" data={singlePlanet.orbital_period} />
                <AdditionalInfo name="Rotation Period" data={singlePlanet.rotation_period}/>
                <AdditionalInfo name="Diameter" data={singlePlanet.diameter}/>
            </div>
        </div>
    )
}